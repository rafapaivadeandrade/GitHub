import React from "react";
import { View, TouchableOpacity } from "react-native";
import HeaderFollowing from "../../components/HeaderFollowing";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import {
  Container,
  Text,
  BottomLine,
  YellowView1,
  YellowView2,
  FirstView,
  ImageSelected,
  SecondView,
} from "./styles";
import { useUser } from "../../hooks/ContextApi";

export default function Seguidores({ navigation }) {
  const { user, following, selectedUser } = useUser();

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
      <HeaderFollowing
        style={{ zIndex: 10 }}
        repositoriosSeguindo={user.following}
      />

      <Container
        style={{ flex: 1 }}
        data={following}
        keyExtractor={(follow) => String(follow.id)}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.2}
        renderItem={({ item: follow }) => (
          <TouchableOpacity onPress={() => handleNewUserPage(follow.login)}>
            <BottomLine>
              <FirstView>
                <View>
                  <YellowView1></YellowView1>
                  <YellowView2></YellowView2>
                </View>
                <ImageSelected
                  source={{
                    uri: follow.avatar_url,
                  }}
                />
                <SecondView>
                  <Text>#{follow.login}</Text>
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
