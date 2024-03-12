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

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OnBoardingScreen">
        <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} options={{headerShown:false}}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:false}} />
        <Stack.Screen name="OTPScreen" component={OTPScreen} options={{headerShown:false}} />
        <Stack.Screen name="DashboardScreen" component={BottomTabNavigation} options={{headerShown:false}} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} options={{headerShown:false}} />
        <Stack.Screen name="InvitationScreen" component={InvitationScreen} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation