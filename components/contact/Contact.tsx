import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./contact.style";
import Avatar from "../avatar/Avatar";
import { useRouter } from "expo-router";
interface ContactProps {
  contact: {
    id: number;
    username: string;
    email: string;
    enabled: boolean;
    created: number;
  };
  isNewChat: boolean;
}

const Contact: React.FC<ContactProps> = ({ contact }, isNewChat) => {
  const router = useRouter();
  const handleOnPress = (isNewChat: boolean) => {
    if (isNewChat) {
      router.push({
        pathname: `/conversation/${contact.id}`,
        params: { isNewChat: isNewChat ? 1 : 0 },
      });
    } else {
      console.log("see contact details");
    }
  };
  return (
    <TouchableOpacity onPress={() => handleOnPress(isNewChat)}>
      <View style={styles.container}>
        <Avatar />
        <Text style={styles.contactText}>{contact.username}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Contact;
