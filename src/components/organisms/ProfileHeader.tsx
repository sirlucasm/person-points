import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { PRIMARY } from '../../styles/colors';
import ProfileCard from '../molecules/ProfileCard';
import Header from './Header';

const BackgroundView = styled.View`
  background-color: ${PRIMARY};
  height: 340px;
  padding-top: 30px;
  align-items: center;
`;

const ProfileHeader = () => {
  return (
    <BackgroundView>
      <Header />
      <ProfileCard />
    </BackgroundView>
  )
}

export default ProfileHeader
