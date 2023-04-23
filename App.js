import { useFonts, Montserrat_400Regular, Montserrat_300Light, Montserrat_700Bold, Montserrat_900Black  } from "@expo-google-fonts/montserrat";
import { ThemeProvider } from "./src/context/ThemeProvider";

//Rotas
import { Routes } from './src/routes';

//Wait to loading
//SplashScreen.preventAutoHideAsync();

export default function App() { 
  
  let [fontsLoaded] = useFonts({
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_700Bold,
    Montserrat_900Black
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
}
