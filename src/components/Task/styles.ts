import styled from "styled-components/native";
import { Check, Trash } from "phosphor-react-native";


export const Container = styled.View`
width: 360px;
height: 64px;
background-color: ${({theme})=> theme.COLORS.GRAY_500};
justify-content: space-between;
align-items: center;
flex-direction: row;
padding: 14px;
border-radius: 6px;
border: 1px solid ${({theme})=> theme.COLORS.GRAY_400};
margin-bottom: 8px;

`
type Props ={
  isDone: boolean
}

export const ButtonSelect = styled.Pressable<Props>`
width: 18px;
height: 18px;
border-radius: 9999px;
border: 1px solid ${({isDone, theme})=> !isDone ? theme.COLORS.BLUE_200 : theme.COLORS.PURPLE_500};
background-color: ${({isDone, theme})=> !isDone ? theme.COLORS.GRAY_500 : theme.COLORS.PURPLE_500}
`
export const IconCheck = styled(Check).attrs(({ theme }) => ({
    size: 15,
    color: theme.COLORS.GRAY_100,
    weight: 'light',
  }))`
  `;

type TextProps ={
  isDone: boolean
}
export const Text = styled.Text<TextProps>`
  margin-left: 8px;
  color: ${({theme, isDone})=> !isDone ? theme.COLORS.GRAY_100: theme.COLORS.GRAY_300};
  width: 250px;
  text-decoration: ${({isDone}) => isDone && 'line-through'};
  text-decoration-color: ${({isDone, theme}) => isDone && theme.COLORS.GRAY_300};
`

export const RemoveButton = styled.Pressable`
`

export const IconTrash = styled(Trash).attrs(({ theme }) => ({
    size: 24,
    color: theme.COLORS.GRAY_300,
    weight: 'light',
  }))`
  `;