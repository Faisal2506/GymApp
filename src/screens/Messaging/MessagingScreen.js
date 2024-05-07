import { View, Text } from 'react-native'
import React from 'react'
import FocusAwareStatusBar from '../../components/StatusBar/FocusAwareStatusBar'
import { useTheme } from '../../context/ThemeContext'
import { styles } from './MessagingScreenStyle'


const MessagingScreen = () => {
  const { theme, isDarkMode } = useTheme();
  return (
    <View style={[styles.mainContainer,{backgroundColor: theme.backgroundColor}]}>
      <FocusAwareStatusBar isLightBar={isDarkMode?true:false} isTopSpace={true} isTransparent={true} />
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Group Chat</Text>
      </View>
    </View>
  )
}

export default MessagingScreen