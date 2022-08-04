import { View, Text, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { Avatar, Overlay } from 'react-native-elements';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import normalize from 'react-native-normalize';
import styled from 'styled-components/native';
import { useAppContext } from '../../contexts/app/context';
import { StyledText } from '../../styles/text';
import { formatTierName } from '../../utils/person';
import { Ionicons } from '@expo/vector-icons';
import { GRAY_DARK } from '../../styles/colors';

const { width, height } = Dimensions.get('window');

const Content = styled.View`
  align-items: center;
  margin-top: 20px;
`;

const PersonArea = styled.TouchableOpacity`
  align-items: center;
  width: ${width * 0.624 - 20}px;
  margin-horizontal: 10px;
`;

const AddPersonButton = styled.TouchableOpacity`
  align-items: center;
  width: ${width * 0.55}px;
`;

const PersonInfo = styled.View`
  align-items: flex-start;
`;

interface PersonSelectModalProps {
  isVisible: boolean;
  onBackdropPress?: () => void;
}

const PersonSelectModal = ({
  isVisible,
  onBackdropPress,
}: PersonSelectModalProps) => {
  const { persons, handlePersonSelectModal } = useAppContext();

  return (
    <Overlay
      isVisible={isVisible}
      onBackdropPress={onBackdropPress}
      animationType='fade'
      overlayStyle={{
        height: 280,
        width: normalize(240, 'width')
      }}
    >
      <Content>
        <StyledText size={18} bolded>Selecionar perfil</StyledText>

        <FlatList
          style={{ marginTop: 14, }}
          data={persons}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          decelerationRate='normal'
          renderItem={({ item: person, index }) => (
            <>
              <PersonArea
                onPress={() => handlePersonSelectModal(person)}
              >
                <Avatar
                  size={96}
                  source={{ uri: person.profilePic }}
                  rounded
                />

                <StyledText size={18}>{person.name}</StyledText>
                <PersonInfo>
                  <StyledText size={15}>pontos: {person.points}</StyledText>
                  <StyledText size={15}>tier: {formatTierName(person.tierName, person.tierNumber)}</StyledText>
                </PersonInfo>
              </PersonArea>
              {
                persons.length == index+1 &&
                <AddPersonButton>
                  <Avatar
                    size={96}
                    icon={{ name: 'plus', type: 'font-awesome', color: GRAY_DARK }}
                    rounded
                  />
                  <StyledText size={18}>Criar um novo</StyledText>
                </AddPersonButton>
              }
            </>
          )}
        />
      </Content>
    </Overlay>
  )
}

export default PersonSelectModal
