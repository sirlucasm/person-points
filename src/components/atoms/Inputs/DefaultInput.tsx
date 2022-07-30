import { Input, InputProps } from 'react-native-elements';
import styled from 'styled-components/native';

const InputArea = styled.View`
  border: 1px solid #6d6d6d;
  border-radius: 6px;
  height: 48px;
  padding-left: 4px;
  padding-top: 2px;
`;

const CustomInput = styled(Input)`
  font-size: 16px;
`;

const DefaultInput = ({ ...props }: InputProps) => {
  return (
    <InputArea>
      <CustomInput
        inputContainerStyle={{ borderBottomWidth: 0, }}
        {...props}
        containerStyle={{ height: 42 }}
      />
    </InputArea>
  )
}

export default DefaultInput
