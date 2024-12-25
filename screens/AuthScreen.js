import React, {useState} from "react";
import {Text, TextInput, StyleSheet, Alert} from "react-native";
import Screen from "../layout/Screen";
import {useNavigation} from "@react-navigation/native";
import Button from "../components/Button";
import {storeAccessToken} from "../store/auth";

// TODO - REFRESH TOKEN + AUTO REFRESH
function AuthScreen() {
  const [accessToken, setAccessToken] = useState("");
  const navigation = useNavigation();

  const handleSetToken = () => {
    storeAccessToken(accessToken);
    Alert.alert("Success", "Access token has been set successfully!");
  };

  return (
    <Screen>
      <Text style={styles.heading}>Authentication</Text>

      <TextInput
        style={styles.input}
        placeholder="Access Token"
        value={accessToken}
        onChangeText={setAccessToken}
      />
      <Button type="primary" onPress={handleSetToken}>
        Set Token
      </Button>

      <Button type="link" onPress={() => navigation.goBack()}>
        Back
      </Button>
    </Screen>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    color: "#0E121B",
    marginVertical: 40,
    fontFamily: "Inter_500Medium",
    letterSpacing: -1,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default AuthScreen;
