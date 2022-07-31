import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { GRAY_LIGHT, GRAY_MEDIUM } from "../../../../styles/colors";

const { width } = Dimensions.get('window');

export const TitleArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: 30px;
  margin-top: 30px;
  align-items: center;
`;

export const FormArea = styled.KeyboardAvoidingView`
  margin-top: 40px;
  margin-left: 28px;
  width: ${width * 0.7}px;
`;
