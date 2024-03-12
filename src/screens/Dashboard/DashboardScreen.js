import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './DashboardStyle'
import FocusAwareStatusBar from '../../components/StatusBar/FocusAwareStatusBar'

const DashboardScreen = () => {
  return (
    <ScrollView style={styles.mainContainer}>
      <FocusAwareStatusBar isLightBar={true} isTopSpace={true} isTransparent={true} />
      <View style={styles.welcomeContainer}>
        <Text style={styles.usernameText}>HELLO SARAH,</Text>
        <Text style={styles.welcomeText}>Good morning</Text>
      </View>
      <View style={styles.cardTitleContainer}>
        <Text style={styles.cardTitle}>Today Workout Plan</Text>
        <Text style={styles.dailyDate}>Mon 11 Mar</Text>
      </View>
      <TouchableOpacity style={styles.cardContainer}>
        <Image 
          source={require('../../../assets/images/Dashboard/DailyWorkoutCard.png')}
          style={styles.imageStyle}
        />
      </TouchableOpacity>
      <View style={styles.cardTitleContainer}>
        <Text style={styles.cardTitle}>Monthly Workout Plan</Text>
        <Text style={styles.dailyDate}>March</Text>
      </View>
      <TouchableOpacity style={styles.cardContainer}>
        <Image 
          source={require('../../../assets/images/Dashboard/DailyWorkoutCard.png')}
          style={styles.imageStyle}
        />
      </TouchableOpacity>
    </ScrollView>
  )
}

export default DashboardScreen