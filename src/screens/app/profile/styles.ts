import styled from "styled-components/native";
import { GRAY_LIGHT } from "../../../styles/colors";

export const TasksContent = styled.TouchableOpacity<any>`
  width: 100%;
  background-color: ${props => props.color};
  height: 54px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;
export const TitleArea = styled.View`
  flex: 2;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ContentArea = styled.View`
  flex: 1;
  background-color: #e4e4e4;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  justify-content: center;
  align-items: center;
`;
