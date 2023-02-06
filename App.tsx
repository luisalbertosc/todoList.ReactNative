import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/styles/theme';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { Home } from '@screens/Home';
import { Loading } from '@components/Loading';
import { TodoContextProvider } from '@context/TodoContext';



export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold})

  return (
    <>
    <ThemeProvider theme={theme}>
      
    <StatusBar 
    style='light'
    backgroundColor='transparent'
    translucent
    />
    <TodoContextProvider>
      { fontsLoaded ? <Home/> : <Loading/>}
      </TodoContextProvider>
    </ThemeProvider>
    
    </>
  );
}
