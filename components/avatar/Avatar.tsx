import React from "react";
import { Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./avatar.style"

const Avatar = () => {
  return (
    <View style={styles.avatar}>
      <FontAwesome5 name="user-friends" size={24} color="white" />
    </View>
  );
};

export default Avatar;
