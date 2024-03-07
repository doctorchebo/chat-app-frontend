import React, { useState } from "react";
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/rootReducer";
import Message from "@/components/message/Message";
import { fetchConversation, sendMessage } from "@/redux/message/messageActions";
import { SIZES, COLORS } from "../../constants/theme";
import { Feather } from "@expo/vector-icons";
import { MessageType } from "@/types/MessageTypes";
import styles from "./conversation.styles"
const Conversation = () => {
  const [content, setContent] = useState("");
  const [messageType, setMessageType] = useState("TEXT");
  const { id } = useLocalSearchParams<{ id: string }>();
  const dispatch: any = useDispatch();
  const params = useLocalSearchParams();
  useEffect(() => {
    if (!Boolean(params.isNewChat)) {
      dispatch(fetchConversation(id));
    }
  }, []);

  const { messages, loading, error } = useSelector(
    (state: RootState) => state.message
  );

  const handleSendMessage = () => {
    const recipIds = [];
    recipIds.push(Number(id));
    const message: MessageType = {
      chatId: Number(id),
      recipientIds: recipIds,
      content: content,
      messageType: messageType,
    };
    dispatch(sendMessage(message));
  };

  return (
    <SafeAreaView>
      {!Boolean(params.isNewChat) && loading ? (
        <ActivityIndicator />
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <View style={styles.container}>
          <FlatList
            data={messages}
            renderItem={({ item }) => <Message message={item} />}
            keyExtractor={(item) => item?.id.toString()}
            contentContainerStyle={{ columnGap: SIZES.medium }}
          />
        </View>
      )}
      <View style={styles.newMessageContainer}>
        <TextInput
          onChangeText={(text) => setContent(text)}
          placeholder="Write your message here"
          placeholderTextColor="white"
          style={styles.textInput}
        />
        <TouchableOpacity onPress={handleSendMessage}>
          <Feather name="send" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Conversation;
