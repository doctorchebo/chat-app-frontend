import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { useRouter } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import styles from "./login.style";
import { loginUser } from "@/redux/auth/authActions";
import { RootState } from "@/redux/rootReducer";

interface ApiResponse {
  authenticationToken: string;
  refreshToken: string;
  expiresAt: number;
  username: string;
}

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | undefined>("");
  const dispatch: any = useDispatch();
  const isLoading = useSelector((state: RootState) => state.auth.loading);

  const handleLogin = () => {
    dispatch(loginUser({ username, password }));
  };

  return isLoading ? (
    <ActivityIndicator />
  ) : error ? (
    <Text>Error while login user</Text>
  ) : (
    <SafeAreaView style={styles.pageContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>SECRET CHAT APP</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setUsername(text)}
          value={username}
          placeholder="username"
          placeholderTextColor="grey"
        />
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setPassword((prevPassword) => text)}
          value={password}
          placeholder="password"
          placeholderTextColor="grey"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
