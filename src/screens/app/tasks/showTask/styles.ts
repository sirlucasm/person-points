import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { GRAY_LIGHT, PRIMARY } from "../../../../styles/colors";

const { width } = Dimensions.get('window');

export const TitleArea = styled.View`
  margin-left: 90px;
  margin-top: 80px;
`;

export const Divider = styled.View`
  border-bottom-color: ${GRAY_LIGHT};
  border-bottom-width: 1px;
  width: 100%;
  margin-vertical: 30px;
`;

export const SubTasksList = styled.View`
  margin-bottom: 25px;
  flex-direction: row;
  align-items: flex-end;
`;

export const ButtonContent = styled.View`
  height: 118px;
  margin-right: 30px;
  justify-content: center;
`;

export const CreateSubTaskBtn = styled.TouchableOpacity`
  background-color: ${PRIMARY};
  width: 52px;
  height: 52px;
  align-self: flex-end;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`;
