import { RootState } from "@/redux/rootReducer";
import React, { useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ChatComponent from "../chat/Chat";
import { getChats } from "@/redux/chat/chatActions";
import { SIZES } from "@/constants/theme";
import Icon from "@expo/vector-icons/Ionicons";

import styles from "./chats.style";
import { useRouter } from "expo-router";
import { SwipeListView } from "react-native-swipe-list-view";
import { ChatProps } from "@/types/ChatTypes";

const Chats = () => {
  const router = useRouter();
  const { loading, chats, error } = useSelector(
    (state: RootState) => state.chat
  );
  const dispatch: any = useDispatch();
  useEffect(() => {
    dispatch(getChats("/chat/getCurrentUserChats"));
  }, []);

  const handleCreateNewChat = () => {
    router.push(`/contacts`);
  };

  const renderHiddenItem = (item : any, rowMap : any) => (
    <View style={styles.rowBack}>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnRight]}
        onPress={() => deleteItem(item.chat.id)}>
        <Text style={styles.backTextWhite}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  const deleteItem = (id: number) => {
    console.log("remove id " + id);
  };

  return (
    <SafeAreaView>
      {loading ? (
        <ActivityIndicator />
      ) : error ? (
        <Text style={styles.text}>{error}</Text>
      ) : chats.length === 0 ? (
        <View style={styles.container}>
          <Text style={styles.text}>You have no chats, create a new one</Text>
        </View>
      ) : (
        <>
          <View style={styles.container}>
            <FlatList
              data={chats}
              renderItem={({ item }) => <ChatComponent chat={item} />}
              keyExtractor={(chat) => chat?.id.toString()}
              contentContainerStyle={{ columnGap: SIZES.medium }}
            />
            <SwipeListView
              data={chats}
              renderItem={({item})=> <ChatComponent chat={item}/>}
              keyExtractor={(chat) => chat?.id.toString()}
              renderHiddenItem={({item}, rowMap)=> renderHiddenItem(item, rowMap)}
              leftOpenValue={75}
              contentContainerStyle={{ columnGap: SIZES.medium }}
            />
          </View>
          <View>
            <TouchableOpacity
              style={styles.createBtn}
              onPress={handleCreateNewChat}
            >
              <Icon name="create" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default Chats;
