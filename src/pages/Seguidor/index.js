import React, { useState } from "react";
import { Dimensions, View, TouchableOpacity } from "react-native";
import HeaderFollower from "../../components/HeaderFollower";
import {
  Container,
  Text,
  Image,
  FirstView,
  YellowView1,
  YellowView2,
  SecondView,
  ThirdView,
  MainText,
  SecondText,
  StatisticsView,
  Number,
} from "./styles";
import { useUser } from "../../hooks/ContextApi";

export default function Seguidor() {
  const { temporaryUser } = useUser();

  return (
    <>
      <HeaderFollower
        style={{ zIndex: 10 }}
        greenArrowColor={"#539421"}
        userLogin={temporaryUser.login}
      />
      <Container
        style={{
          flex: 1,
          width: Dimensions.get("screen").width,
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity>
          <Image
            source={{
              uri: temporaryUser.avatar_url,
            }}
          />
        </TouchableOpacity>
        <FirstView>
          <View>
            <YellowView1></YellowView1>
            <YellowView2></YellowView2>
          </View>

          <View>
            <MainText>{temporaryUser.name}</MainText>
            <SecondText>{temporaryUser.blog}</SecondText>
            <SecondText>{temporaryUser.location}</SecondText>
          </View>
        </FirstView>
        <SecondView>
          <StatisticsView>
            <Number>{temporaryUser.followers}</Number>
            <SecondText>Seguidores</SecondText>
          </StatisticsView>
          <StatisticsView>
            <Number>{temporaryUser.following}</Number>
            <SecondText>Seguindo</SecondText>
          </StatisticsView>
          <StatisticsView>
            <Number>{temporaryUser.public_repos}</Number>
            <SecondText>Repos</SecondText>
          </StatisticsView>
        </SecondView>
        <ThirdView>
          <View>
            <YellowView1></YellowView1>
            <YellowView2></YellowView2>
          </View>

          <View>
            <MainText>Bio</MainText>
            <SecondText>{temporaryUser.bio}</SecondText>
          </View>
        </ThirdView>
      </Container>
    </>
  );
}
