import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export default function HeaderRepo(props) {
  const navigation = useNavigation();

  return (
    <View style={styles.superContainer}>
      <View style={styles.container}>
        <BorderlessButton onPress={navigation.goBack}>
          <Feather name="arrow-left" size={24} color="#E5E5E5" />
        </BorderlessButton>
        <Text style={styles.repositorios}>10 Repositorios</Text>
        <View style={styles.invisibleContainer}></View>
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
    paddingRight: 34,
    paddingTop: 15,
    backgroundColor: "#1f1f1f",
    borderBottomWidth: 1,
    borderColor: "#dde3d0",
    borderBottomWidth: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 20,
  },
  repositorios: {
    color: "#E5E5E5",
    fontWeight: "bold",
  },
  invisibleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
