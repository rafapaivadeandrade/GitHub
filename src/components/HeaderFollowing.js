import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export default function HeaderFollowing(props) {
  const navigation = useNavigation();

  return (
    <View style={styles.superContainer}>
      <View style={styles.container}>
        <BorderlessButton onPress={navigation.goBack}>
          <Feather name="arrow-left" size={24} color="#E5E5E5" />
        </BorderlessButton>
        <Text style={styles.repositorios}>
          {props.repositoriosSeguindo
            ? `${props.repositoriosSeguindo} Seguindo`
            : `0 Seguindo`}
        </Text>
        <View style={styles.invisibleContainer}></View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingRight: 34,
    paddingTop: 15,
    backgroundColor: "#1f1f1f",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 20,
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
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
