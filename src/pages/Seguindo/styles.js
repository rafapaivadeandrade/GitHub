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
export const BottomLine = styled.View`
  border-bottom-color: #bcbcbc;
  border-width: 0.5px;
`;
export const YellowView1 = styled.View`
  width: 10px;
  height: 20px;
  background-color: #ffce00;
  margin-right: 20px;
  border-top-right-radius: 10px;
`;
export const YellowView2 = styled.View`
  width: 10px;
  height: 20px;
  background-color: #ffce00;
  margin-right: 20px;
  border-bottom-right-radius: 10px;
`;
export const FirstView = styled.View`
  flex-direction: row;
  padding-top: 20px;
  padding-bottom: 20px;
  align-items: center;
`;
export const ImageSelected = styled.Image`
  border-color: #ddd;
  border-width: 3px;
  width: 70px;
  height: 70px;
  border-radius: 35px;
  margin-right: 30px;
  align-items: center;
  align-self: center;
`;
export const SecondView = styled.View`
  flex-direction: row;
  width: 250px;
  justify-content: space-between;
`;
