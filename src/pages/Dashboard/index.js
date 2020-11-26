import React from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import Header from "../../components/Header";
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
  SecondaryText,
  StatisticsView,
  Number,
} from "./styles";
import { useUser } from "../../hooks/ContextApi";

export default function Dashboard() {
  const { user } = useUser();
  const emailSplitted = user.blog.split("@");

  return (
    <>
      <Header style={{ zIndex: 10 }} hashtag={emailSplitted} />
      <Container>
        <Image
          source={{
            uri: user.avatar_url,
          }}
        />
        <FirstView>
          <View>
            <YellowView1></YellowView1>
            <YellowView2></YellowView2>
          </View>

          <View>
            <MainText>{user.name}</MainText>
            <SecondaryText>{user.blog}</SecondaryText>
            <SecondaryText>{user.location}</SecondaryText>
          </View>
        </FirstView>
        <SecondView>
          <StatisticsView>
            <Number>{user.followers}</Number>
            <SecondaryText>Seguidores</SecondaryText>
          </StatisticsView>
          <StatisticsView>
            <Number>{user.following}</Number>
            <SecondaryText>Seguindo</SecondaryText>
          </StatisticsView>
          <StatisticsView>
            <Number>{user.public_repos}</Number>
            <SecondaryText>Repos</SecondaryText>
          </StatisticsView>
        </SecondView>
        <ThirdView>
          <View>
            <YellowView1></YellowView1>
            <YellowView2></YellowView2>
          </View>

          <View>
            <MainText>Bio</MainText>
            <SecondaryText>{user.bio}</SecondaryText>
          </View>
        </ThirdView>
      </Container>
    </>
  );
}
