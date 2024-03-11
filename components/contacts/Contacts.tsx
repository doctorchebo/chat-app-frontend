import React, { useEffect } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/rootReducer";
import { fetchContacts } from "@/redux/contact/contactActions";
import Contact from "../contact/Contact";
import { AntDesign } from "@expo/vector-icons";
import { ContactsProps } from "@/types/ContactTypes";
import styles from "./contacts.style";

const Contacts: React.FC<ContactsProps> = ({ isNewChat }) => {
  const dispatch: any = useDispatch();
  const { id } = useSelector((state: RootState) => state.auth);
  useEffect(() => {
    if (id != null) {
      dispatch(fetchContacts(id));
    } else {
    }
  }, [id]);

  const { contacts, loading, error } = useSelector(
    (state: RootState) => state.contact
  );

  const handleAddContact = () => {
    console.log("Add contact");
  };
  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator />
      ) : error ? (
        <Text style={styles.text}>{error}</Text>
      ) : contacts.length === 0 ? (
        <Text style={styles.text}>You have no contacts</Text>
      ) : (
        <View>
          <FlatList
            data={contacts}
            renderItem={({ item }) => (
              <Contact contact={item} isNewChat={isNewChat} />
            )}
          />
        </View>
      )}
      <TouchableOpacity style={styles.addBtn} onPress={handleAddContact}>
        <AntDesign name="adduser" size={24} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Contacts;
