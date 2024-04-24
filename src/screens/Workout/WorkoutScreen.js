import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import {styles} from './WorkoutStyle'
import FocusAwareStatusBar from '../../components/StatusBar/FocusAwareStatusBar'
import Button from '../../components/Button/Button'
import SearchBar from '../../components/SearchBar/SearchBar'
import WorkoutDetailsTable from '../../components/WorkoutDetailsTable/WorkoutDetailsTable'
import { useTheme } from '../../context/ThemeContext'

const WorkoutScreen = ({navigation}) => {
  const { theme, isDarkMode } = useTheme();
  const addWorkoutHandle = () => {
    navigation.navigate('AddWorkoutScreen')
  }
  return (
    <ScrollView style={[styles.mainContainer,{backgroundColor:theme.backgroundColor}]}>
      <FocusAwareStatusBar isLightBar={isDarkMode?true:false} isTopSpace={true} isTransparent={true} />
      <View style={styles.buttonContainer}>
      <Button title={"Add Workout"} buttonStyle={styles.addWorkoutBtn} buttonFunction={addWorkoutHandle}/>
      </View>
      <SearchBar placeholder={"Search for workout"}/>
      <View style={styles.workoutTableContainer}>
      <WorkoutDetailsTable />
      </View>
    </ScrollView>
  )
}

export default WorkoutScreen