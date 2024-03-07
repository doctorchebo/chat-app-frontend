import React, { useEffect } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  SafeAreaView,
  FlatList,
} from "react-native";
import styles from "./contacts.style";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/rootReducer";
import { fetchContacts } from "@/redux/contact/contactActions";
import Contact from "../contact/Contact";
interface ContactsProps {
  isNewChat: boolean;
}

const Contacts: React.FC<ContactsProps> = ({ isNewChat }) => {
  const dispatch: any = useDispatch();
  const { id } = useSelector((state: RootState) => state.auth);
  useEffect(() => {
    dispatch(id != null && fetchContacts(id));
  }, [id]);

  const { contacts, loading, error } = useSelector(
    (state: RootState) => state.contact
  );
  return (
    <SafeAreaView>
      {loading ? (
        <ActivityIndicator />
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <View style={styles.container}>
          <FlatList
            data={contacts}
            renderItem={({ item }) => (
              <Contact contact={item} isNewChat={isNewChat} />
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Contacts;
