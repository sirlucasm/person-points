import styled from "styled-components/native";
import { Avatar } from 'react-native-elements';
import { View } from 'react-native';
import { useAuthContext } from '../../contexts/auth/context';
import { StyledText, Text20 } from "../../styles/text";
import { useAppContext } from "../../contexts/app/context";

const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 28px;
  padding-top: 20px;
  margin-bottom: 20px;
  width: 100%;
`;

const Header = () => {
  const { personSelected, setShowPersonSelectModal } = useAppContext();

  return (
    <Content>
      <Avatar
        size="medium"
        source={{ uri: personSelected?.profilePic || '', }}
        rounded
        onPress={() => setShowPersonSelectModal(true)}
      />
      <View/>
      <View>
        <StyledText>{personSelected?.name}</StyledText>
      </View>
    </Content>
  )
}

export default Header
