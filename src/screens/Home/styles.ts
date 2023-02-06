import { SafeAreaView } from 'react-native-safe-area-context';
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
flex: 1;
background-color: ${({theme})=> theme.COLORS.GRAY_600};
font-size: ${({theme})=> theme.FONT_FAMILY.INTER};
align-items: center;
`

export const ListTasksContainer = styled.View`
justify-content: center;
align-items: center;
`