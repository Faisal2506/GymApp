import { Image, Text, TextInput, View, KeyboardAvoidingView, ScrollView } from 'react-native'
import React from 'react'
import FocusAwareStatusBar from '../../components/StatusBar/FocusAwareStatusBar'
import { styles } from './LoginStyle'

const LoginScreen = () => {
  const [email,setEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState(false);
  
  const loginHandle = () => {
    if(!email) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if(!email) {
      return false
    }
    navigation.navigate('OTPScreen')
  }  

  return (
    <KeyboardAvoidingView style={styles.mainContainer}>
      <FocusAwareStatusBar isLightBar={true} isTopSpace={true} isTransparent={true} />
      <View >
        <Image source={require('../../../assets/images/Login/Login.png')} style={styles.imageStyle} />
      </View>
      <ScrollView style={styles.bottomHalf}>
        <TextInput
          placeholder='Email'
          placeholderTextColor={"#ffffff"}
          style={styles.emailInput}
          onChangeText={(text)=>setEmail(text)}
          value={email}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

