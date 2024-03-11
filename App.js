import StackNavigation from "./src/navigation/stackNavigation";
import { customFonts } from "./src/constants/constants";
import { useFonts } from 'expo-font';

const App = () => {
  const [isLoaded] = useFonts(customFonts)
  return(
    isLoaded &&
    <StackNavigation/>
  )
}

export default App