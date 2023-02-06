import { PlusCircle } from "phosphor-react-native";
import styled from "styled-components/native";


export const ContainerInput = styled.View`
flex-direction: row;
padding: 18px;
border-radius: 8px;
width: 100%;
margin-top: -45px;
`

export const InputComponent = styled.TextInput`
  color: ${({theme})=> theme.COLORS.GRAY_100};
  background-color: ${({theme})=> theme.COLORS.GRAY_500};
  font-size: ${({theme})=> theme.FONT_SIZE.LG}px;
  border-radius: 6px;
  padding: 16px;
  width: 85%;
`

export const Button = styled.TouchableOpacity`
width: 52px;
height: 52px;
border-radius: 6px;
background-color: ${({theme})=> theme.COLORS.BLUE_500};
justify-content: center;
align-items: center;
margin-left: 6px;
`

export const Icon = styled(PlusCircle).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_100,
  weight: 'light',
}))`
`;