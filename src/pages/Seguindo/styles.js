import styled from "styled-components/native";
import { Feather as Icon, AntDesign } from "@expo/vector-icons";
import { Form as Unform } from "@unform/mobile";
import { RectButton } from "react-native-gesture-handler";
export const Container = styled.FlatList`
  flex: 2;
  height: 50%;
  background-color: #292929;
  border-color: #292929;
`;

export const Text = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
