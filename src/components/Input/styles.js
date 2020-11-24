import styled, { css } from "styled-components";
import { View, Text } from "react-native";
export const Error = styled.View`
  left: 200px;
  justify-content: center;
  align-items: center;
  top: 15px;
  position: absolute;
`;
export const Container = styled.View`
  background: #ffffff;
  border-radius: 10px;
  height: 60px;
  border: 2px solid #232129;
  width: 350px;
  color: #f4ede8;
  display: flex;
  flex-direction: row;
`;
export const TextError = styled.Text`
  color: #c53030;
`;
