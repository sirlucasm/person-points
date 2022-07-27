import { View, Text } from 'react-native';
import { Input, InputProps } from 'react-native-elements';
import styled from 'styled-components/native';

const InputArea = styled.View`
  background-color: #fff;
  border-radius: 50px;
  height: 48px;
  padding-left: 4px;
`;

const CustomInput = styled(Input)`
  font-size: 16px;
`;

const AuthInput = ({ ...props }: InputProps) => {
  return (
    <InputArea>
      <CustomInput
        {...props}
        containerStyle={{ height: 42 }}
      />
    </InputArea>
  )
}

export default AuthInput
