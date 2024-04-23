import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './DashboardStyle'
import FocusAwareStatusBar from '../../components/StatusBar/FocusAwareStatusBar'
import FloatingButton from '../../components/FloatingButton/FloatingButton'
import DarkModeSwitch from '../../components/DarkModeSwitch/DarkModeSwitch'
import { useTheme } from '../../context/ThemeContext'

const DashboardScreen = () => { 
  const { theme, isDarkMode } = useTheme();
  const userLoginPercentage = 71;
  return (
    <View style={[styles.mainContainer,{backgroundColor:theme.backgroundColor}]}>
      <FocusAwareStatusBar isLightBar={isDarkMode?true:false} isTopSpace={true} isTransparent={true} />
      <View style={{flexDirection:"row"}}>
      <View style={styles.welcomeContainer}>
        <Text style={[styles.usernameText,{color:theme.textColor}]}>HELLO SARAH,</Text>
        <Text style={styles.welcomeText}>Good morning</Text>
      </View>
      <DarkModeSwitch />
      </View>
      <View style={styles.cardTitleContainer}>
        <Text style={[styles.cardTitle,{color:theme.textColor}]}>Today Workout Plan</Text>
        <Text style={styles.dailyDate}>Mon 11 Mar</Text>
      </View>
      <TouchableOpacity style={styles.cardContainer}>
        <Image 
          source={require('../../../assets/images/Dashboard/DailyWorkoutCard.png')}
          style={styles.imageStyle}
        />
      </TouchableOpacity>
      <View style={styles.cardTitleContainer}>
        <Text style={[styles.cardTitle,{color:theme.textColor}]}>Monthly Workout Plan</Text>
        <Text style={styles.dailyDate}>March</Text>
      </View>
      <TouchableOpacity style={styles.cardContainer}>
        <Image 
          source={require('../../../assets/images/Dashboard/DailyWorkoutCard.png')}
          style={styles.imageStyle}
        />
      </TouchableOpacity>
      <Text style={styles.trafficTitle}>Gym Traffic</Text>
      {userLoginPercentage<=40?
      <View style={styles.row}>
      <View style={styles.greenTraffic}></View>
        <Text style={[styles.trafficText ,{color:"#2dc937"}]}>Not up to the mark. YOU GOTTA PUSH YOURSELF</Text>
      </View>
      :
      userLoginPercentage>40 && userLoginPercentage<=70?
      <View style={styles.row}>
      <View style={styles.orangeTraffic}></View>
        <Text style={[styles.trafficText ,{color:"#e7b416"}]}>Doing good but YOU CAN DO BETTER</Text>
      </View>
      :
      <View style={styles.row}>
      <View style={styles.redTraffic}></View>
        <Text style={[styles.trafficText ,{color:"#cc3232"}]}>You are consistent. KEEP UP THE GOOD WORK!!!</Text>
      </View>
      }
      <FloatingButton />
    </View>
  )
}

export default DashboardScreen

