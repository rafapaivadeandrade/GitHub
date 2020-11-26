import styled from "styled-components/native";
import { Feather as Icon, AntDesign } from "@expo/vector-icons";
import { Form as Unform } from "@unform/mobile";
import { RectButton } from "react-native-gesture-handler";
export const Container = styled.View`
  flex: 1;
  height: 100%;
  background-color: #292929;
  border-color: #292929;
  justify-content: space-between;
`;
export const ButtonPrimary = styled(RectButton)`
  margin-top: 20px;
  height: 60px;
  background-color: #ffce00;
  border-radius: 10px;
  padding: 24px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
export const Text = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
export const Form = styled(Unform)`
  margin-top: 120px;
  max-width: 350px;
`;
export const Github = styled(AntDesign)`
  margin-bottom: 20px;
  align-self: center;
`;
export const Image = styled.Image`
  border-color: #ddd;
  border-width: 3px;
  width: 120px;
  height: 120px;
  border-radius: 60px;
  margin-top: -60px;
  align-items: center;
  align-self: center;
`;
export const FirstView = styled.View`
  flex-direction: row;
  margin-top: -40px;
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
export const SecondView = styled.View`
  background-color: #383838;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
  padding-left: 10px;
`;
export const ThirdView = styled.View`
  flex-direction: row;
  margin-bottom: 150px;
`;
export const MainText = styled.Text`
  color: #ffffff;
  font-size: 25px;
`;
export const SecondaryText = styled.Text`
  font-size: 16px;
  font-weight: 200;
  color: #bcbcbc;
`;
export const StatisticsView = styled.View`
  align-items: center;
  padding-right: 20px;
  padding-left: 20px;
`;
export const Number = styled.Text`
  color: #ffffff;
  font-size: 40px;
`;
