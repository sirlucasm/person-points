import styled from "styled-components/native";
import { View, ActivityIndicator } from 'react-native';
import { GRAY_DARK, PRIMARY } from '../../styles/colors';

const Content: any = styled.View`
  background-color: #f7f7f7;
  padding: 24px 30px;
  border-radius: 6px;
`;

Content.Text = styled.Text`
  margin-top: 6px;
  color: ${GRAY_DARK};
`;

const LoadingContent = ({ title }: any) => {
  return (
    <Content>
      <ActivityIndicator color={PRIMARY} size={26} />
      <Content.Text>{title || 'Carregando...'}</Content.Text>
    </Content>
  )
}

export default LoadingContent
