import styled from "styled-components/native";
import { GRAY_LIGHT, GRAY_MEDIUM } from "../../../styles/colors";

export const Content = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 40px;
`;

export const TitleArea = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
export const TitleContent = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Divider = styled.View`
  border-bottom-color: ${GRAY_LIGHT};
  border-bottom-width: 1px;
  width: 70px;
`;

export const AddTaskButton = styled.TouchableOpacity`
  border-color: ${GRAY_MEDIUM};
  border-width: 1px;
  border-radius: 6px;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  height: 43px;
  width: 43px;
`;
export const ButtonArea = styled.View`
  margin-vertical: 80px;
  align-items: center;
`;

export const ContentWithoutPerson = styled.View`
  align-items: center;
  justify-content: center;
  height: 100%;
`;
