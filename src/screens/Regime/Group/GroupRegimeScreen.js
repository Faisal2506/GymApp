import { View, Text } from 'react-native'
import React from 'react'
import FocusAwareStatusBar from '../../../components/StatusBar/FocusAwareStatusBar'
import { styles } from './GroupRegimeStyle'
import SearchBar from '../../../components/SearchBar/SearchBar'

const GroupRegimeScreen = () => {
  return (
    <View style={styles.mainContainer}>
    <FocusAwareStatusBar isLightBar={true} isTopSpace={true} isTransparent={true} />
    <SearchBar placeholder={"Search"} />
    <View style={styles.detailsContainer}>
      <Text style={styles.detailsText}>Group Regime name</Text>
      <Text style={styles.detailsText}>Counts</Text>
      <Text style={styles.detailsText}>Number of days</Text>
      <Text style={styles.detailsText}>Send By</Text>
      <Text style={styles.detailsText}>Assigned Date</Text>
    </View>
  </View>
  )
}

export default GroupRegimeScreen