import { useCallback, useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { Avatar, Overlay } from 'react-native-elements';
import normalize from 'react-native-normalize';
import styled from 'styled-components/native';
import PersonService from '../../services/PersonService';

interface ChangePersonCartoonProps {
  isVisible: boolean;
  onBackdropPress?: () => void;
  handleCartoonPick: (url: string) => void;
}

const Content = styled.View`
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;
const CartoonPicker = styled.TouchableOpacity`
  margin: 6px;
`;

const ChangePersonCartoon = ({
  isVisible,
  onBackdropPress,
  handleCartoonPick
}: ChangePersonCartoonProps) => {
  const [cartoons, setCartoons] = useState<any[]>([]);

  const fetchCartoons = useCallback(() => {
    PersonService.listAllCartoons()
      .then((data) => {
        setCartoons(data);
      });
  }, []);

  useEffect(() => {
    fetchCartoons();
  }, []);

  return (
    <Overlay
      isVisible={isVisible}
      onBackdropPress={onBackdropPress}
      animationType='fade'
      overlayStyle={{
        height: normalize(182, 'height'),
        width: normalize(240, 'width')
      }}
    >
      <ScrollView>
        <Content>
          {
            cartoons.map((cartoon, index) => (
                <CartoonPicker
                  onPress={() => handleCartoonPick(cartoon.url)}
                  key={index}
                >
                  <Avatar
                    size={60}
                    source={{ uri: cartoon.url }}
                  />
                </CartoonPicker>
            ))
          }
        </Content>
      </ScrollView>
    </Overlay>
  )
}

export default ChangePersonCartoon
