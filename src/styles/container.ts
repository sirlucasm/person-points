import { LinearGradient } from "expo-linear-gradient";
import styled from 'styled-components/native';
import { WHITE } from "./colors";

export const Container = styled.View`
  flex: 1;
  padding-top: 30px;
  background-color: ${WHITE};
`;

export const LinearGradientLoginBackground = styled(LinearGradient)`
  flex: 1;
  padding-top: 30px;
  align-items: center;
  justify-content: center;
`;
