import styled from "styled-components/native";
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
export const FirstLine = styled.View`
  flex-direction: row;
  padding-top: 50px;
  padding-bottom: 20px;
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
export const MainText = styled.Text`
  color: #ffffff;
  font-size: 25px;
`;
export const SecondaryText = styled.Text`
  font-size: 16px;
  font-weight: 200;
  color: #bcbcbc;
  max-width: 350px;
  line-height: 30px;
`;
export const Number = styled.Text`
  color: #bcbcbc;
  font-size: 16px;
  font-weight: 200;
`;
export const IconsView = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
  width: 350px;
`;
