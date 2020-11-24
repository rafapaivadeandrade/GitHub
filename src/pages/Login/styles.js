import styled from "styled-components/native";
import { Form as Unform } from "@unform/mobile";
import { RectButton } from "react-native-gesture-handler";
export const Container = styled.View`
  flex: 1;
  background-color: #1f1f1f;
  align-items: center;
  justify-content: center;
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
  max-width: 350px;
`;
