import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { Container, Image } from "./styles";
import { RectButton } from "react-native-gesture-handler";
import Github from "../../images/github3.png";
import api from "../../services/api";

export default function Login() {
  return (
    <Container>
      <Image source={Github} />
    </Container>
  );
}
