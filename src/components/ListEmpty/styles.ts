import { Clipboard } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
`;

export const Message = styled.Text`
    text-align: center;
    color: ${({theme})=> theme.COLORS.GRAY_300};
    margin-top: 16px;
    font-weight: bold;
    font-size: ${({theme})=> theme.FONT_SIZE.LG}px;
  `;

export const Text = styled.Text`
 text-align: center;
 color: ${({theme})=> theme.COLORS.GRAY_300};
 font-size: ${({theme})=> theme.FONT_SIZE.LG}px;
`

  export const Icon = styled(Clipboard).attrs(({ theme }) => ({
    size: 56,
    color: theme.COLORS.GRAY_300,
    weight: 'light',
  }))`
  `;