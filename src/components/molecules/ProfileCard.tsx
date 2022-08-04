import { Ionicons } from '@expo/vector-icons';
import { Dimensions, Text, TouchableOpacity } from 'react-native';
import { Avatar, Image, LinearProgress } from 'react-native-elements';
import styled from 'styled-components/native';
import { useAppContext } from '../../contexts/app/context';
import { useAuthContext } from '../../contexts/auth/context';
import { GRAY_DARK, GRAY_MEDIUM, WHITE } from '../../styles/colors';
import { StyledText } from '../../styles/text';
import { formatTierName, personNextTierProgress } from '../../utils/person';

const { width } = Dimensions.get('window');

const Card = styled.View`
  background-color: ${WHITE};
  width: ${width * 0.85}px;
  height: 300px;
  top: 20px;
  border-radius: 18px;
  align-items: center;

  shadowColor: "#000",
  shadow-offset 0 2px;
  shadow-opacity: 0.15;
  shadow-radius: 3.84px;

  elevation: 10;
`;

const TopButtons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  margin-top: 12px;
`;

const TierContent = styled.View`
  flex-direction: row;
  margin-top: 20px;
  align-items: center;
`;

const TierInfo = styled.View`
  margin-left: 8px;
`;

const ProgressContent = styled.View`
  flex-direction: row;
  margin-top: 16px;
  align-items: center;
  width: 140px;
`;

const ProfileCard = () => {
  const { personSelected } = useAppContext();
  const { currentUser, logout } = useAuthContext();

  return (
    <Card>
      <TopButtons>
        <TouchableOpacity
          activeOpacity={0.9}
        >
          <Ionicons name='settings' size={24} color={GRAY_DARK} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={logout}
        >
          <Ionicons name='exit-outline' size={24} color={GRAY_DARK} />
        </TouchableOpacity>
      </TopButtons>
      <Avatar
        rounded
        source={{ uri: currentUser?.photoURL || '' }}
        size={90}
        containerStyle={{ marginBottom: 10 }}
      />
      <StyledText
        color={GRAY_DARK}
      >
        {currentUser?.displayName}
      </StyledText>
      <TierContent>
        <Avatar
          size={52}
          source={{ uri: personSelected?.tierPicURL || '' }}
        />
        <TierInfo>
          <StyledText
            color={GRAY_MEDIUM}
            size={15}
            bolded
          >
            {formatTierName(personSelected?.tierName || '', personSelected?.tierNumber || 0)}
          </StyledText>
        </TierInfo>
      </TierContent>
      <ProgressContent>
        <StyledText color={GRAY_MEDIUM} size={14}>
          {personSelected?.points}{' '}
        </StyledText>
        <LinearProgress
          value={personNextTierProgress(personSelected?.points, personSelected?.nextTierPoints)}
          color="primary"
          variant="determinate"
        />
        <StyledText color={GRAY_MEDIUM} size={14}>
          {' '}{personSelected?.nextTierPoints}
        </StyledText>
      </ProgressContent>
    </Card>
  )
}

export default ProfileCard
