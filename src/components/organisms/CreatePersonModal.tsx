import { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Avatar, Button, Overlay } from 'react-native-elements';
import normalize from 'react-native-normalize';
import styled from 'styled-components/native';
import { useAppContext } from '../../contexts/app/context';
import { useAuthContext } from '../../contexts/auth/context';
import PersonService from '../../services/PersonService';
import { ALERT, PRIMARY } from '../../styles/colors';
import { StyledText } from '../../styles/text';
import DefaultInput from '../atoms/Inputs/DefaultInput';
import ChangePersonCartoon from '../molecules/ChangePersonCartoon';

interface CreatePersonModalProps {
  isVisible: boolean;
  onBackdropPress: () => void;
}

const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TextContent = styled.View`
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  max-width: 60%;
`;

const InputArea = styled.View`
  margin-top: 20px;
  width: 80%;
`;

const CreatePersonModal = ({
  isVisible,
  onBackdropPress,
  ...props
}: CreatePersonModalProps) => {
  const { currentUser } = useAuthContext();
  const { setPersonSelected } = useAppContext();
  const [showCartoonsModal, setShowCartoonsModal] = useState(false);
  const [imagePicked, setImagePicked] = useState('');
  const [name, setName] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const toggleCartoonsModal = () => setShowCartoonsModal(!showCartoonsModal);

  const handleCartoonPick = (url: string) => {
    setImagePicked(url);
    toggleCartoonsModal();
  }

  const handleSave = () => {
    PersonService.create({
      name,
      profilePic: imagePicked
    }, currentUser?.uid || '')
      .then((data) => {
        setPersonSelected(data);
        onBackdropPress();
      });
  }

  useEffect(() => {
    const validateName = () => {
      if (name) {
        setAlertMessage('');
        if (name.length < 3) setAlertMessage('Deve conter pelo menos 3 caracteres');
        return;
      }
      setAlertMessage('Defina um nome para seu perfil');
    }
    validateName();
  }, [name]);

  return (
    <Overlay
      isVisible={isVisible}
      onBackdropPress={onBackdropPress}
      animationType='fade'
      {...props}
      overlayStyle={{
        height: normalize(350, 'height'),
        width: normalize(300, 'width')
      }}
    >
      <Content>
        <TouchableOpacity
          onPress={toggleCartoonsModal}
        >
          <Avatar
            size={120}
            rounded
            source={{
              uri: imagePicked || 'https://firebasestorage.googleapis.com/v0/b/person-points.appspot.com/o/images%2Fprofile_pictures%2Fdefault-profile-pic.png?alt=media&token=172cc0a5-efe1-4243-b257-939aea38ab63'
            }}
          />
        </TouchableOpacity>
        <TextContent>
          <StyledText>Olá, </StyledText>
          <StyledText bolded>{name || '________'}</StyledText>
        </TextContent>
        <InputArea>
          <DefaultInput
            placeholder='Nome'
            onChangeText={setName}
          />
        </InputArea>
        <StyledText
          size='14'
          color={ALERT}
          style={{ marginTop: 4 }}
        >
          { alertMessage && alertMessage }
        </StyledText>
        <Button
          title='Salvar'
          containerStyle={{ marginVertical: 20, }}
          buttonStyle={{ backgroundColor: PRIMARY, }}
          disabled={!!alertMessage}
          onPress={handleSave}
        />
      </Content>

      <ChangePersonCartoon
        isVisible={showCartoonsModal}
        handleCartoonPick={handleCartoonPick}
      />
    </Overlay>
  )
}

export default CreatePersonModal
