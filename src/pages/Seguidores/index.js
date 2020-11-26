import React from "react";
import { View, TouchableOpacity } from "react-native";
import HeaderFollowers from "../../components/HeaderFollowers";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import {
  Container,
  LoginText,
  BottomLine,
  YellowView1,
  YellowView2,
  FirstView,
  ImageSelected,
  SecondView,
} from "./styles";
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
        }}
        data={followers}
        keyExtractor={(follower) => String(follower.id)}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.2}
        renderItem={({ item: follower }) => (
          <TouchableOpacity onPress={() => handleNewUserPage(follower.login)}>
            <BottomLine>
              <FirstView>
                <View>
                  <YellowView1></YellowView1>
                  <YellowView2></YellowView2>
                </View>
                <ImageSelected
                  source={{
                    uri: follower.avatar_url,
                  }}
                />
                <SecondView>
                  <LoginText>#{follower.login}</LoginText>
                  <BorderlessButton>
                    <Feather name="arrow-right" size={24} color="#E5E5E5" />
                  </BorderlessButton>
                </SecondView>
              </FirstView>
            </BottomLine>
          </TouchableOpacity>
        )}
      />
    </>
  );
}
