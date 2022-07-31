import { Input, InputProps } from 'react-native-elements';
import styled from 'styled-components/native';

const InputArea = styled.View<any>`
  border: 1px solid #6d6d6d;
  border-radius: 6px;
  height: 48px;
  padding-left: 4px;
  padding-top: 2px;
  ${props => props.spaceTop && 'margin-top: 10px;'}
  ${props => props.textArea && 'text-align-vertical: top; height: 90px;'}
`;

const CustomInput = styled(Input)`
  font-size: 16px;
`;

const DefaultInput = ({ spaceTop, textArea, ...props }: any) => {
  const newProps: InputProps = props;
  return (
    <InputArea spaceTop={spaceTop} textArea={textArea}>
      <CustomInput
        inputContainerStyle={{ borderBottomWidth: 0, }}
        {...newProps}
        containerStyle={{ height: textArea ? 80 : 42 }}
      />
    </InputArea>
  )
}

export default DefaultInput
