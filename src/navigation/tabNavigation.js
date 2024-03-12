import { MaterialIcons, FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashboardScreen from "../screens/Dashboard/DashboardScreen";
import WorkoutScreen from "../screens/Workout/WorkoutScreen";
import RegimeScreen from "../screens/Regime/RegimeScreen";
import DietScreen from "../screens/Diet/DietScreen";
import { View, Text, StyleSheet} from 'react-native'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants/constants";
import MyPlanScreen from "../screens/MyPlan/MyPlanScreen";

const Tab = createBottomTabNavigator();

const screenOptions = () => {
  return {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle:{
      position:'absolute',
      left:0,
      right:0,
      bottom:0,
      backgroundColor:"#1C1C1E",
      height:65,
      borderTopWidth:0
    },
    tabBarHideOnKeyboard: true,
  }
}

const BottomTabNavigation = () => {
  return(
    <Tab.Navigator initialRouteName="TabDashboard" screenOptions={screenOptions}>
      <Tab.Screen 
        name="TabDashboard" 
        component={DashboardScreen} 
        options={{tabBarIcon:({focused})=>(
          <View style={focused?styles.selectedTab:styles.otherTab}>
            <MaterialIcons 
              name="space-dashboard"
              size={focused?30:20}
              color={focused?"#D0FD3E":"#ffffff"}
            />
            <Text style={{fontSize:12,color:focused?"#D0FD3E":"#ffffff"}}>Dashboard</Text>
          </View>
        )}}
      />
      <Tab.Screen 
        name="TabWorkout" component={WorkoutScreen} options={{tabBarIcon:({focused})=>(
          <View style={focused?styles.selectedTab:styles.otherTab}>
            <FontAwesome5
              name="dumbbell"
              size={focused?30:20}
              color={focused?"#D0FD3E":"#ffffff"}
            />
            <Text style={{fontSize:12,color:focused?"#D0FD3E":"#ffffff"}}>Workout</Text>
          </View>
        )}}
      />
      <Tab.Screen 
        name="TabRegime" component={RegimeScreen} options={{tabBarIcon:({focused})=>(
          <View style={focused?styles.selectedTab:styles.otherTab}>
            <MaterialIcons 
              name="space-dashboard"
              size={focused?30:20}
              color={focused?"#D0FD3E":"#ffffff"}
            />
            <Text style={{fontSize:12,color:focused?"#D0FD3E":"#ffffff"}}>Regime</Text>
          </View>
        )}}
      />
      <Tab.Screen 
        name="TabDiet" component={DietScreen} options={{tabBarIcon:({focused})=>(
          <View style={focused?styles.selectedTab:styles.otherTab}>
            <MaterialIcons 
              name="space-dashboard"
              size={focused?30:20}
              color={focused?"#D0FD3E":"#ffffff"}
            />
            <Text style={{fontSize:12,color:focused?"#D0FD3E":"#ffffff"}}>Diet</Text>
          </View>
        )}}
      />
      <Tab.Screen 
        name="TabMyPlan" component={MyPlanScreen} options={{tabBarIcon:({focused})=>(
          <View style={focused?styles.selectedTab:styles.otherTab}>
            <FontAwesome6
              name="user-large"
              size={focused?30:20}
              color={focused?"#D0FD3E":"#ffffff"}
            />
            <Text style={{fontSize:12,color:focused?"#D0FD3E":"#ffffff"}}>My Plan</Text>
          </View>
        )}}
      />
    </Tab.Navigator>
  )
}

export default BottomTabNavigation;

const styles = StyleSheet.create({
  selectedTab: {
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"blue",
    width: 100,
    height:100,
    borderRadius:50
  },
  otherTab:{
    alignItems:"center",
    justifyContent:"center"
  }
})