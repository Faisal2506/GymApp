import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './MembershipDetailsStyle'
import FocusAwareStatusBar from '../../components/StatusBar/FocusAwareStatusBar'

const MembershipDetailsScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <FocusAwareStatusBar isLightBar={true} isTopSpace={true} isTransparent={true} />
      <Text>MembershipDetailsScreen</Text>
    </View>
  )
}

export default MembershipDetailsScreen