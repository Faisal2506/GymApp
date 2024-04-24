import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import IndividualRegimeScreen from '../screens/Regime/Individual/IndividualRegimeScreen';
import GroupRegimeScreen from '../screens/Regime/Group/GroupRegimeScreen';
import { FontAwesome, FontAwesome5, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { View,Text,StyleSheet } from 'react-native';
import { SCREEN_HEIGHT,SCREEN_WIDTH } from "../constants/constants";
import { useTheme } from "../context/ThemeContext";

const Tab = createMaterialTopTabNavigator();

const screenOptions =() =>{

  return{
    tabBarActiveTintColor: '#e91e63',

    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle:{
      position:'absolute',
      left:0,
      right:0,
      // top:SCREEN_HEIGHT/35,
      top:0,
      paddingTop:SCREEN_HEIGHT/35,
      backgroundColor:"blue",
      height:SCREEN_HEIGHT/8,
    },
    tabBarLabelStyle: { fontSize: 12 },
    // tabBarIconStyle:{
    //   // marginBottom:5
    // },
    tabBarHideOnKeyBoard:true,
    tabBarAndroidRipple: { borderless: true },
  }
}

const TopTabNavigation = () => {
  const { theme } = useTheme();
  return (
  <Tab.Navigator initialRouteName="IndividualRegimeScreen" screenOptions={screenOptions}>
    <Tab.Screen name="IndividualRegimeScreen" component={IndividualRegimeScreen} options={{tabBarIcon:({focused})=>(
        <View style={styles.tabBar}>
          <FontAwesome
            name="user"
            size={20}
            color={focused?"#D0FD3E":"#ffffff"}
          />
          <View >
          <Text style={{fontSize:12,color:focused?"#D0FD3E":"#ffffff"}}>Individual</Text>
          </View>
        </View>
      )}}/>
    <Tab.Screen name="GroupRegimeScreen" component={GroupRegimeScreen} options={{tabBarIcon:({focused})=>(
        <View style={styles.tabBar}>
          <FontAwesome5
            name="users"
            size={20}
            color={focused?"#D0FD3E":"#ffffff"}
          />
          <Text style={{fontSize:12,color:focused?"#D0FD3E":"#ffffff"}}>Group</Text>
        </View>
      )}}/>
  </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBar:{
    alignItems:'center',
    // borderWidth:1,borderColor:"red",
    height:100,width:100,
    left:-35
    
  }
})

export default TopTabNavigation;