import React from "react";
import { View } from "react-native";
import HeaderRepo from "../../components/HeaderRepo";
import { Feather as Icon } from "@expo/vector-icons";
import {
  Container,
  Text,
  BottomLine,
  FirstLine,
  YellowView1,
  YellowView2,
  MainText,
  SecondaryText,
  Number,
  IconsView,
} from "./styles";
import { useUser } from "../../hooks/ContextApi";

export default function Repos() {
  const { repositorios, user } = useUser();

  return (
    <>
      <HeaderRepo
        style={{ zIndex: 10 }}
        repositoriosQuantidade={user.public_repos}
      />
      <Container
        style={{ flex: 1 }}
        data={repositorios}
        keyExtractor={(repositorio) => String(repositorio.id)}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.2}
        renderItem={({ item: repositorio }) => (
          <BottomLine>
            <FirstLine>
              <View>
                <YellowView1></YellowView1>
                <YellowView2></YellowView2>
              </View>

              <View>
                <MainText>{repositorio.name}</MainText>
                <SecondaryText>{repositorio.description}</SecondaryText>
                <IconsView>
                  <View style={{ flexDirection: "row" }}>
                    <Icon
                      name="star"
                      size={24}
                      color="#FFCE00"
                      style={{ marginRight: 5 }}
                    />
                    <Number>{user.followers}</Number>
                  </View>

                  <View style={{ flexDirection: "row" }}>
                    <Icon
                      name="lock"
                      size={24}
                      color="#539421"
                      style={{ marginRight: 5 }}
                    />
                    <Icon name="unlock" size={24} color="#A80C29" />
                  </View>
                </IconsView>
              </View>
            </FirstLine>
          </BottomLine>
        )}
      />
    </>
  );
}
