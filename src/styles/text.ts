import styled from "styled-components/native";

interface TextType {
  color: string;
  size: number;
  bolded: boolean;
};

export const Text = styled.Text<TextType>`
  font-family: 'Roboto-Regular';
  font-size: ${props => props.size || 20}px;
  ${props => props.color && `color: ${props.color};`}
  ${props => props.bolded && 'font-weight: bold;'}
`;

export const Text14 = styled(Text)`
  font-size: 14px;
`;

export const Text16 = styled(Text)`
  font-size: 16px;
`;

export const Text18 = styled(Text)`
  font-size: 18px;
`;

export const Text20 = styled(Text)`
  font-size: 20px;
`;

export const StyledText = styled.Text<TextType>`
  font-size: ${props => props.size || 20}px;
  font-family: 'Lionel-Text-Steam-Regular';
  ${props => props.color && `color: ${props.color};`}
  ${props => props.bolded && 'font-weight: bold;'}
`;
