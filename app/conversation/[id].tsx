import React, { useRef, useState } from "react";
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/rootReducer";
import Message from "@/components/message/Message";
import { fetchConversation, sendMessage } from "@/redux/message/messageActions";
import { Feather } from "@expo/vector-icons";
import { MessageType } from "@/types/MessageTypes";

import styles from "./conversation.styles";
import { getChatDetails } from "@/redux/chat/chatActions";
const Conversation = () => {
  const [content, setContent] = useState("");
  const [messageType, setMessageType] = useState("TEXT");
  const { id } = useLocalSearchParams<{ id: string }>();
  const dispatch: any = useDispatch();
  const params = useLocalSearchParams();
  useEffect(() => {
    if (!Boolean(params.isNewChat)) {
      dispatch(fetchConversation(id));
      dispatch(getChatDetails(id));
    }
    flatListRef.current?.scrollToEnd({ animated: false });
  }, []);

  const { messages, loading, error } = useSelector(
    (state: RootState) => state.message
  );

  useEffect(() => {
    setContent("");
  }, [messages]);

  const chatId = messages.length > 0 && messages[0].chatId;
  const currentUserId = useSelector((state: RootState) => state.auth.id);
  const chatDetails = useSelector(
    (state: RootState) => state.chat.currentChatDetails
  );
  const getRecipientsIds = () => {
    return chatDetails != null
      ? chatDetails.participantsIds
          .filter((id) => id !== currentUserId)
          .map((id) => id)
      : [];
  };

  const handleSendMessage = () => {
    const message: MessageType = {
      chatId: chatId != null ? Number(chatId) : null,
      recipientIds: getRecipientsIds(),
      content: content,
      messageType: messageType,
    };
    dispatch(sendMessage(message));
  };

  const flatListRef = useRef<FlatList>(null);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={"height"}
        keyboardVerticalOffset={100}
      >
        {!Boolean(params.isNewChat) && loading ? (
          <ActivityIndicator
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        ) : error ? (
          <Text
            style={{
              position: "absolute",
              textAlign: "center",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {error}
          </Text>
        ) : null}

        <FlatList
          ref={flatListRef}
          data={messages}
          renderItem={({ item }) => <Message message={item} />}
          keyExtractor={(item) => item?.id.toString()}
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingBottom: 60 }}
          onContentSizeChange={() =>
            flatListRef.current?.scrollToEnd({ animated: false })
          }
        />
        <View style={styles.newMessageContainer}>
          <TextInput
            onChangeText={(text) => setContent(text)}
            value={content}
            placeholder="Write your message here"
            placeholderTextColor="white"
            style={styles.textInput}
          />
          <TouchableOpacity onPress={handleSendMessage}>
            <Feather name="send" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Conversation;
