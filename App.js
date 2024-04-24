import StackNavigation from "./src/navigation/stackNavigation";
import { customFonts } from "./src/constants/constants";
import { useFonts } from 'expo-font';
import { ThemeProvider } from "./src/context/ThemeContext";


const App = () => {
  const [isLoaded] = useFonts(customFonts)
  return(
      isLoaded &&
    <ThemeProvider>
    <StackNavigation/>
    </ThemeProvider>
  )
}

export default App