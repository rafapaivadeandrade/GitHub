import React, { useEffect, useState, useRef } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import Header from "../../components/Header";
import { Container, Text } from "./styles";
import { useUser } from "../../hooks/ContextApi";

export default function Dashboard({ navigation }) {
  const { user } = useUser();
  const emailSplitted = user.blog.split("@");

  return (
    <>
      <Header style={{ zIndex: 10 }} hashtag={emailSplitted} />
      <Container
        style={{
          flex: 1,
          width: Dimensions.get("screen").width,
          justifyContent: "space-between",
        }}
      >
        <Image
          source={{
            uri: user.avatar_url,
          }}
          style={styles.imageSelected}
        />
        <View style={styles.firstView}>
          <View>
            <View style={styles.yelloView1}></View>
            <View style={styles.yelloView2}></View>
          </View>

          <View styles={styles.personalInfoView}>
            <Text style={styles.principal}>{user.name}</Text>
            <Text style={styles.subPrincipal}>{user.blog}</Text>
            <Text style={styles.subPrincipal}>{user.location}</Text>
          </View>
        </View>
        <View style={styles.secondView}>
          <View style={styles.statisticsView}>
            <Text style={styles.number}>{user.followers}</Text>
            <Text style={styles.subPrincipal}>Seguidores</Text>
          </View>
          <View style={styles.statisticsView}>
            <Text style={styles.number}>{user.following}</Text>
            <Text style={styles.subPrincipal}>Seguindo</Text>
          </View>
          <View style={styles.statisticsView}>
            <Text style={styles.number}>{user.public_repos}</Text>
            <Text style={styles.subPrincipal}>Repos</Text>
          </View>
        </View>
        <View style={styles.thirdView}>
          <View>
            <View style={styles.yelloView1}></View>
            <View style={styles.yelloView2}></View>
          </View>

          <View style={styles.personalInfBoView}>
            <Text style={styles.principal}>Bio</Text>
            <Text style={styles.subPrincipal}>{user.bio}</Text>
          </View>
        </View>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  imageSelected: {
    borderColor: "#ddd",
    borderWidth: 3,
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    marginTop: -60,
    alignItems: "center",
    alignSelf: "center",
  },
  firstView: {
    flexDirection: "row",
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
  personalInfoView: {
    flexDirection: "column",
  },
  secondView: {
    backgroundColor: "#383838",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  thirdView: {
    marginBottom: 100,
    flexDirection: "row",
  },
  principal: {
    color: "#ffffff",
    fontSize: 25,
  },
  subPrincipal: {
    fontSize: 16,
    fontWeight: "200",
    color: "#BCBCBC",
  },
  statisticsView: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  number: {
    color: "#ffffff",
    fontSize: 40,
  },
});
