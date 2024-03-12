import { View, Text } from 'react-native'
import React from 'react'
import {styles} from './WorkoutStyle'
import FocusAwareStatusBar from '../../components/StatusBar/FocusAwareStatusBar'
import Button from '../../components/Button/Button'
import SearchBar from '../../components/SearchBar/SearchBar'

const WorkoutScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <FocusAwareStatusBar isLightBar={true} isTopSpace={true} isTransparent={true} />
      <View style={styles.buttonContainer}>
      <Button title={"Add Workout"} buttonStyle={styles.addWorkoutBtn}/>
      </View>
      <SearchBar placeholder={"Search for workout"}/>
    </View>
  )
}

export default WorkoutScreen