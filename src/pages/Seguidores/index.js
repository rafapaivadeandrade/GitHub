import React from "react";
import {
  Dimensions,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import HeaderFollowers from "../../components/HeaderFollowers";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { Container, Text } from "./styles";
import { useUser } from "../../hooks/ContextApi";

export default function Seguidores({ navigation }) {
  const { followers, user, selectedUser } = useUser();

  function handleNewUserPage(login) {
    selectedUser({
      name: login,
    });
    if (selectedUser) {
      navigation.navigate("TemporaryUser");
    } else {
      alert("An error has occurred while selecting a new user.");
    }
  }

  return (
    <>
      <HeaderFollowers
        style={{ zIndex: 10 }}
        repositoriosSeguidores={user.followers}
      />
      <Container
        style={{
          flex: 1,
          width: Dimensions.get("screen").width,
        }}
        data={followers}
        keyExtractor={(follower) => String(follower.id)}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.2}
        renderItem={({ item: follower }) => (
          <TouchableOpacity onPress={() => handleNewUserPage(follower.login)}>
            <View style={styles.bottomLine}>
              <View style={styles.firstView}>
                <View>
                  <View style={styles.yelloView1}></View>
                  <View style={styles.yelloView2}></View>
                </View>
                <Image
                  source={{
                    uri: follower.avatar_url,
                  }}
                  style={styles.imageSelected}
                />
                <View
                  style={{
                    flexDirection: "row",
                    width: 250,
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={styles.text}>#{follower.login}</Text>
                  <BorderlessButton
                    onPress={navigation.goBack}
                    style={styles.button}
                  >
                    <Feather name="arrow-right" size={24} color="#E5E5E5" />
                  </BorderlessButton>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#ffffff",
  },
  bottomLine: {
    borderBottomColor: "#BCBCBC",
    borderWidth: 0.5,
  },
  firstView: {
    flexDirection: "row",
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: "center",
  },
  yelloView1: {
    width: 10,
    height: 20,
    backgroundColor: "#FFCE00",
    marginRight: 20,
    borderTopRightRadius: 20 / 2,
  },
  yelloView2: {
    width: 10,
    height: 20,
    backgroundColor: "#FFCE00",
    marginRight: 20,
    borderBottomRightRadius: 20 / 2,
  },
  imageSelected: {
    borderColor: "#ddd",
    borderWidth: 3,
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    marginRight: 30,
    alignItems: "center",
    alignSelf: "center",
  },
});
