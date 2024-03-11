import { Text, View } from 'react-native'
import React from 'react'
import FocusAwareStatusBar from '../../components/StatusBar/FocusAwareStatusBar'

const LoginScreen = () => {
  return (
    <View>
      <FocusAwareStatusBar isLightBar={false} isTopSpace={true} isTransparent={true} />
      <Text>LoginScreen</Text>
    </View>
  )
}

export default LoginScreen

