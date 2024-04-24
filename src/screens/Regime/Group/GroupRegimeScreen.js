import { View, Text } from 'react-native'
import React from 'react'
import FocusAwareStatusBar from '../../../components/StatusBar/FocusAwareStatusBar'
import { styles } from './GroupRegimeStyle'
import SearchBar from '../../../components/SearchBar/SearchBar'
import { useTheme } from '../../../context/ThemeContext'


const GroupRegimeScreen = () => {
  const { theme } = useTheme();
  return (
    <View style={[styles.mainContainer,{backgroundColor: theme.backgroundColor}]}>
    <FocusAwareStatusBar isLightBar={true} isTopSpace={true} isTransparent={true} />
    <SearchBar placeholder={"Search"} />
    <View style={styles.detailsContainer}>
      <Text style={[styles.detailsText,{color: theme.greenText}]}>Group Regime name</Text>
      <Text style={[styles.detailsText,{color: theme.greenText}]}>Counts</Text>
      <Text style={[styles.detailsText,{color: theme.greenText}]}>Number of days</Text>
      <Text style={[styles.detailsText,{color: theme.greenText}]}>Send By</Text>
      <Text style={[styles.detailsText,{color: theme.greenText}]}>Assigned Date</Text>
    </View>
  </View>
  )
}

export default GroupRegimeScreen