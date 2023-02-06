import { SafeAreaView } from 'react-native-safe-area-context';
import styled from "styled-components/native";



export const Container = styled.View`
  width: 100%;
  height: 173px;
  flex-direction: row;
  align-items: center;
  justify-content: center; 
  background-color: ${({theme})=> theme.COLORS.GRAY_700};
`

export const Logo = styled.Image`
  
`;