import styled from "styled-components/native";


export const Container = styled.View`
width: 90%;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-bottom: 20px;
margin-top: 20px;
`
export const ContainerCreated = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
`

export const TextCreated = styled.Text`
color: ${({theme})=> theme.COLORS.BLUE_200};
font-weight: bold;

`

export const NumberCreated = styled.View<any>`
background-color: ${({theme})=> theme.COLORS.GRAY_400};
margin-left: 5px;
padding: 2px 8px;
border-radius: 999px;
`

export const ContainerDone = styled(ContainerCreated)`
`

export const TextDone = styled.Text`
color: ${({theme})=> theme.COLORS.PURPLE_200};
font-weight: bold;

`
export const NumberDone = styled(NumberCreated)`

`

export const NumberText = styled.Text`
color: ${({theme})=> theme.COLORS.GRAY_200};
font-weight: bold;
`

