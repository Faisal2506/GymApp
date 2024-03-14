import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OnBoardingScreen from "../screens/OnBoarding/OnBoardingScreen";
import LoginScreen from "../screens/Login/LoginScreen";
import OTPScreen from "../screens/OTP/OTPScreen";
import DashboardScreen from "../screens/Dashboard/DashboardScreen";
import DrawerNavigation from "./drawerNavigation";
import BottomTabNavigation from "./tabNavigation";
import ChatScreen from "../screens/Chat/ChatScreen";
import InvitationScreen from "../screens/Invitation/InvitationScreen";
import AddWorkoutScreen from "../screens/AddWorkout/AddWorkoutScreen";

const Stack = createStackNavigator();

const StackNavigation = () => {
  const options = ()=>{ 
    return{
    headerShown:false
  }
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OnBoardingScreen">
        <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} options={options}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={options} />
        <Stack.Screen name="OTPScreen" component={OTPScreen} options={options} />
        <Stack.Screen name="DashboardScreen" component={BottomTabNavigation} options={options} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} options={options} />
        <Stack.Screen name="InvitationScreen" component={InvitationScreen} options={options} />
        <Stack.Screen name="AddWorkoutScreen" component={AddWorkoutScreen} options={options} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation