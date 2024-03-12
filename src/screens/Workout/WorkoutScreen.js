import { View, Text } from 'react-native'
import React from 'react'
import {styles} from './WorkoutStyle'
import FocusAwareStatusBar from '../../components/StatusBar/FocusAwareStatusBar'

const WorkoutScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <FocusAwareStatusBar isLightBar={true} isTopSpace={true} isTransparent={true} />
      <Text>WorkoutScreen</Text>
    </View>
  )
}

export default WorkoutScreen