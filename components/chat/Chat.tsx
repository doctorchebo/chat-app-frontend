import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Chat as ChatType } from "../../types/ChatTypes";
import styles from "./chat.style";
import { RootState } from "@/redux/rootReducer";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "../avatar/Avatar";
interface ChatProps {
  chat: ChatType;
}

const ChatComponent: React.FC<ChatProps> = ({ chat }) => {
  const router = useRouter();

  const { id } = useSelector((state: RootState) => state.auth);

  const lastMessagesForChats = useSelector(
    (state: RootState) => state.message.lastMessagesForChats
  );

  const handlePress = () => {
    router.push(`/conversation/${chat.id}`);
  };

  const getChatParticipantsNames = () => {
    const participantsExceptCurrentUser = chat.participants.filter(
      (participant) => participant.id != id
    );

    const participantNames = participantsExceptCurrentUser
      .map((participant) => participant.username.toUpperCase())
      .join(", ");
    return participantNames || "Chat";
  };

  const getLastMessage = () => {
    return lastMessagesForChats.find((message) => message.chatId === chat.id)
      ?.content;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={1}
      onPress={handlePress}
    >
      <Avatar />
      <View style={styles.dataContainer}>
        <Text style={styles.title}>{getChatParticipantsNames()}</Text>
        <Text style={styles.lastMessage}>{getLastMessage()}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatComponent;
