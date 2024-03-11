import React from "react";
import { Text, View } from "react-native";
import formatTimestamp from "../../utils/dateFormatter";
import styles from "./message.style";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/rootReducer";

interface MessageProps {
  message: {
    id: number;
    chatId: number;
    recipientIds: number[];
    messageType: "TEXT" | "MULTIMEDIA" | "FILE";
    content: string;
    created: number;
  };
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const createdDate = formatTimestamp(message.created);
  const { id } = useSelector((state: RootState) => state.auth);
  const isSentByCurrentUser = id != null && !message.recipientIds.includes(id);
  return (
    <View
      style={[
        styles.container,
        isSentByCurrentUser ? styles.right : styles.left,
      ]}
    >
      <Text style={styles.messageContent}>{message.content}</Text>
      <Text style={styles.messageDate}>{createdDate}</Text>
    </View>
  );
};

export default Message;
