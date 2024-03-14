import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './MembershipDetailsStyle'
import FocusAwareStatusBar from '../../components/StatusBar/FocusAwareStatusBar'

const MembershipDetailsScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <FocusAwareStatusBar isLightBar={true} isTopSpace={true} isTransparent={true} />
      <View style={styles.details}>
        <View style={styles.container}>
          <Text style={styles.detailsText}>Payment</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.detailsText}>Follow Up</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.detailsText}>Add Days Tab</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.detailsText}>Manual Attendance</Text>
        </View>
        <View style={styles.container}>
          <Text style={[styles.detailsText,{borderWidth:0}]}>Attendance Report</Text>
        </View>
      </View>
    </View>
  )
}

export default MembershipDetailsScreen