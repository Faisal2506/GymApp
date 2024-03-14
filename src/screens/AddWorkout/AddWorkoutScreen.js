import { View, Text } from 'react-native'
import React from 'react'
import FocusAwareStatusBar from '../../components/StatusBar/FocusAwareStatusBar'
import { styles } from './AddWorkoutStyle'

const AddWorkoutScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <FocusAwareStatusBar isLightBar={true} isTopSpace={true} isTransparent={true}/>
      
    </View>
  )
}

export default AddWorkoutScreen