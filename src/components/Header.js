import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export default function Header(props) {
  const navigation = useNavigation();

  return (
    <View style={styles.superContainer}>
      <View style={styles.container}>
        <Text style={styles.hashtag}>#rafa_klose</Text>
        <View style={styles.sairContainer}>
          <Text style={styles.sair}>Sair</Text>
          <BorderlessButton onPress={navigation.goBack}>
            <Feather
              name="arrow-right"
              size={24}
              color="#c53030"
              style={{ marginLeft: 10 }}
            />
          </BorderlessButton>
        </View>
      </View>
      {/* <TouchableOpacity style={styles.imageContainer}>
        <Image
          source={{
            uri: `https://avatars0.githubusercontent.com/u/51189721?v=4`,
          }}
          style={styles.imageSelected}
        />
      </TouchableOpacity> */}
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
    borderBottomWidth: 1,
    borderColor: "#dde3d0",
    borderBottomWidth: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 60,
  },
  sair: {
    color: "#ffffff",
    fontSize: 20,
  },
  hashtag: {
    color: "#ffffff",
    fontSize: 20,
  },
  imageContainer: {
    textAlign: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: -60,
    borderColor: "#ddd",
    borderWidth: 3,
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
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
