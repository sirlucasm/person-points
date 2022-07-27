import styled from "styled-components/native";
import LoadingContent from "../molecules/LoadingContent";

interface AppLoadingProps {
  bgColor?: string;
};

const BackArea = styled.View<AppLoadingProps>`
  flex: 1;
  background-color: ${props => props.bgColor || 'transparent'};
  justify-content: center;
  align-items: center;
`;

const AppLoading = ({ bgColor }: AppLoadingProps) => {
  return (
    <BackArea bgColor={bgColor} >
      <LoadingContent />
    </BackArea>
  )
}

export default AppLoading;
