import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export default function Header(props) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <BorderlessButton onPress={navigation.goBack}>
        <Feather name="arrow-right" size={24} color="#c53030" />
      </BorderlessButton>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#1f1f1f",
    borderBottomWidth: 1,
    borderColor: "#dde3d0",
    paddingTop: 44,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    // fontFamily: "Nunito_600SemiBold",
    color: "#8fa7b3",
    fontSize: 16,
  },
});
