import { Dimensions } from "react-native";
import styled from "styled-components/native";

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

export const ColorPicker = styled.TouchableOpacity<any>`
  background-color: ${props => props.color};
  height: 28px;
  width: 46px;
  border-radius: 12px;
  margin-right: 4px;
  align-items: center;
  justify-content: center;
  ${props => props.isFocused && `
    border-width: 2px;
    border-color: #c9c9c9;
  `}
`;
