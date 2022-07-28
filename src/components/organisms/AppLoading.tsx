import { Dimensions } from "react-native";
import normalize from "react-native-normalize";
import styled from "styled-components/native";
import LoadingContent from "../molecules/LoadingContent";

interface AppLoadingProps {
  bgColor?: string;
  title?: string;
};

const BackArea = styled.View<AppLoadingProps>`
  position: absolute;
  top: 0;
  z-index: 99;
  height: ${Dimensions.get('window').height}px;
  width: 100%;
  background-color: ${props => props.bgColor || 'transparent'};
  justify-content: center;
  align-items: center;
`;

const AppLoading = ({ bgColor, title }: AppLoadingProps) => {
  return (
    <BackArea bgColor={bgColor} >
      <LoadingContent title={title} />
    </BackArea>
  )
}

export default AppLoading;
