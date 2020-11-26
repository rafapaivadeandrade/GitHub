import React, { useEffect, useState, useRef } from "react";
import { FlatList, View, StyleSheet, ScrollView } from "react-native";
import HeaderRepo from "../../components/HeaderRepo";
import { Feather as Icon, AntDesign } from "@expo/vector-icons";
import { Container, Text } from "./styles";
import { useUser } from "../../hooks/ContextApi";

export default function Repos({ navigation }) {
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
          <View style={styles.bottomLine}>
            <View style={styles.firstView}>
              <View>
                <View style={styles.yelloView1}></View>
                <View style={styles.yelloView2}></View>
              </View>

              <View styles={styles.personalInfoView}>
                <Text style={styles.principal}>{repositorio.name}</Text>
                <Text style={styles.subPrincipal}>
                  {repositorio.description}
                </Text>
                <View style={styles.iconsView}>
                  <View style={{ flexDirection: "row" }}>
                    <Icon
                      name="star"
                      size={24}
                      color="#FFCE00"
                      style={{ marginRight: 5 }}
                    />
                    <Text style={styles.number}>{user.followers}</Text>
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
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  bottomLine: {
    borderBottomColor: "#BCBCBC",
    borderWidth: 0.5,
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
    width: 350,
  },
});
