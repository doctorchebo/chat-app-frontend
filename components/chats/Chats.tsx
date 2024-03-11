import { RootState } from "@/redux/rootReducer";
import React, { useEffect } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ChatComponent from "../chat/Chat";
import { deleteChat, getChats } from "@/redux/chat/chatActions";
import Icon from "@expo/vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { SwipeListView } from "react-native-swipe-list-view";
import styles from "./chats.style";
import { getLastMessagesForChats } from "@/redux/message/messageActions";

const Chats = () => {
  const router = useRouter();
  const { loading, chats, error } = useSelector(
    (state: RootState) => state.chat
  );
  const messages = useSelector((state: RootState) => state.message.messages);

  const dispatch: any = useDispatch();
  useEffect(() => {
    console.log("calling API");
    dispatch(getChats("/chat/getAllChatsForCurrentUserDetailed"));
    dispatch(getLastMessagesForChats());
  }, [messages]);

  const handleCreateNewChat = () => {
    router.push(`/contacts`);
  };

  const renderHiddenItem = (id: string) => (
    <View style={styles.deleteContainer}>
      <TouchableOpacity onPress={() => deleteItem(id)}>
        <AntDesign name="delete" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );

  const deleteItem = (id: string) => {
    dispatch(deleteChat(id));
  };

  return (
    <SafeAreaView style={styles.pageContainer}>
      {loading ? (
        <ActivityIndicator />
      ) : error ? (
        <Text style={styles.text}>{error}</Text>
      ) : chats.length === 0 ? (
        <View style={styles.container}>
          <Text style={styles.text}>You have no chats</Text>
        </View>
      ) : (
        <SwipeListView
          data={chats}
          renderItem={({ item }) => <ChatComponent chat={item} />}
          keyExtractor={(chat) => chat?.id.toString()}
          renderHiddenItem={(data) => renderHiddenItem(data.item.id.toString())}
          leftOpenValue={0}
          rightOpenValue={-70}
          stopRightSwipe={-70}
        />
      )}
      <TouchableOpacity style={styles.createBtn} onPress={handleCreateNewChat}>
        <Icon name="create" size={24} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Chats;
