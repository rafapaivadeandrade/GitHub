import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useUser } from "../hooks/ContextApi";
export default function HeaderFollower(props) {
  const navigation = useNavigation();
  const { signIn, isSigned, temporaryUser } = useUser();

  function signInSelectedUser() {
    signIn({ name: temporaryUser.login });
    if (isSigned) {
      navigation.navigate("Dashboard");
    }
  }

  return (
    <View style={styles.superContainer}>
      <View style={styles.container}>
        {props.greenArrowColor && (
          <BorderlessButton onPress={navigation.goBack}>
            <Feather
              name="arrow-left"
              size={24}
              color="#E5E5E5"
              style={{ marginRight: 70 }}
            />
          </BorderlessButton>
        )}
        <Text style={styles.hashtag}>#{props?.userLogin}</Text>
        <View style={styles.sairContainer}>
          {props.greenArrowColor ? (
            <Text style={styles.sair}> Salvar</Text>
          ) : (
            <Text style={styles.sair}>Sair</Text>
          )}
          <BorderlessButton
            onPress={props.greenArrowColor ? signInSelectedUser : goBackToLogin}
          >
            <Feather
              name="arrow-right"
              size={24}
              color={props.greenArrowColor ? props.greenArrowColor : "#c53030"}
              style={{ marginLeft: 10 }}
            />
          </BorderlessButton>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  superContainer: {
    backgroundColor: "#1f1f1f",
  },
  container: {
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 15,
    backgroundColor: "#1f1f1f",
    borderColor: "#dde3d0",
    borderBottomWidth: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 80,
  },
  sair: {
    color: "#ffffff",
    fontSize: 20,
  },
  hashtag: {
    color: "#ffffff",
    fontSize: 20,
    maxWidth: 165,
  },

  sairContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageSelected: {
    borderColor: "#ddd",
    borderWidth: 3,
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
  },
});
