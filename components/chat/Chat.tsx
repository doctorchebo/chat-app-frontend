import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./chat.style";
import { useRouter } from "expo-router";
import { ChatProps } from "@/types/ChatTypes";


const Chat: React.FC<ChatProps> = ({ chat }) => {
  const router = useRouter();
  const handlePress = () => {
    router.push(`/conversation/${chat.id}`);
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.chatName}>Chat name: {chat.name}</Text>
      <Text>Chat Type: {chat.type}</Text>
    </TouchableOpacity>
  );
};

export default Chat;
