import React, { useEffect, useState, useRef } from "react";
import { Dimensions, View, StyleSheet, ScrollView } from "react-native";
import HeaderRepo from "../../components/HeaderRepo";
import { Feather as Icon, AntDesign } from "@expo/vector-icons";
import { Container, Text } from "./styles";
import { useUser } from "../../hooks/ContextApi";

export default function Dashboard({ navigation }) {
  const { signIn, isSigned, setIsSigned } = useUser();

  return (
    <>
      <HeaderRepo style={{ zIndex: 10 }} />

      <Container
        style={{
          flex: 1,
          width: Dimensions.get("screen").width,
        }}
      >
        <View style={styles.bottomLine}>
          <View style={styles.firstView}>
            <View>
              <View style={styles.yelloView1}></View>
              <View style={styles.yelloView2}></View>
            </View>

            <View styles={styles.personalInfoView}>
              <Text style={styles.principal}>brasiliapp-react-native</Text>
              <Text style={styles.subPrincipal}>
                Repository for centralization of the BrasilApp mobile project
              </Text>
              <View style={styles.iconsView}>
                <View style={{ flexDirection: "row" }}>
                  <Icon
                    name="star"
                    size={24}
                    color="#FFCE00"
                    style={{ marginRight: 5 }}
                  />
                  <Text style={styles.number}>32</Text>
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
              </View>
            </View>
          </View>
        </View>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  bottomLine: {
    borderBottomColor: "#BCBCBC",
    borderWidth: 1,
  },
  firstView: {
    flexDirection: "row",
    paddingTop: 50,
    paddingBottom: 20,
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
  principal: {
    color: "#ffffff",
    fontSize: 25,
  },
  subPrincipal: {
    fontSize: 16,
    fontWeight: "200",
    color: "#BCBCBC",
    lineHeight: 30,
    maxWidth: 350,
  },
  number: {
    fontSize: 16,
    fontWeight: "200",
    color: "#BCBCBC",
  },
  iconsView: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
