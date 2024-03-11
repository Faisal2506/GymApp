import { Image, Text, TextInput, View, KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import FocusAwareStatusBar from '../../components/StatusBar/FocusAwareStatusBar'
import { styles } from './LoginStyle'
import { AntDesign } from '@expo/vector-icons'

const LoginScreen = ({navigation}) => {
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
    <ScrollView style={styles.mainContainer}>
      <FocusAwareStatusBar isLightBar={true} isTopSpace={true} isTransparent={true} />
      <View >
        <Image source={require('../../../assets/images/Login/Login.png')} style={styles.imageStyle} />
      </View>
      <View style={styles.bottomHalf}>
        <TextInput
          placeholder='Email'
          placeholderTextColor={"#ffffff"}
          style={styles.emailInput}
          onChangeText={(text)=>setEmail(text)}
          value={email}
        />
        {emailError?<Text style={styles.errorText}>❗Please enter valid email</Text>:null}
        {/* <Button /> */}
        <View style={styles.loginContainer}> 
            <View style={styles.iconContainer}>
              <AntDesign 
                name='apple1'
                color={"#ffffff"}
                size={24}
              />
            </View>
            <View style={styles.iconContainer}>
              <AntDesign 
                name='google'
                color={"#ffffff"}
                size={24}
              />
            </View>
            <TouchableOpacity style={styles.loginBtnContainer} onPress={loginHandle}>
              <Text style={styles.loginText}>Login</Text>
              <AntDesign 
                name='caretright'
                color={"#000000"}
                size={12}
              />
            </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default LoginScreen

