import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './OTPStyle'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import FocusAwareStatusBar from '../../components/StatusBar/FocusAwareStatusBar'
import Button from '../../components/StatusBar/Button/Button'

const OTPScreen = ({navigation}) => {
  const [codeFilled, setCodeFilled] = React.useState();
  const [codeError, setCodeError] = React.useState(false);
  const handleCodeFilled = () => {
    setCodeFilled(true)
  }
  const verifyHandle = () => {
      if(!codeFilled) {
        setCodeError(true);
      } else {
        setCodeError(false);
      }
      if(!codeFilled) {
        return false
      }
      navigation.navigate('HomeScreen')
    } 
  return (
    <View style={styles.mainContainer}>
      <FocusAwareStatusBar isLightBar={true} isTopSpace={true} isTransparent={true} />
      <View style={styles.titleContainer}>
        <Text style={styles
          .title}>VERIFICATION</Text>
        <Text style={styles.subTitle}>CHECK YOUR EMAIL... WE'VE SENT YOU THE PIN AT YOUR EMAIL.</Text>
      </View>
      <OTPInputView
        style={styles.otpContainer}
        pinCount={4}
        // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
        // onCodeChanged = {code => { this.setState({code})}}
        autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={handleCodeFilled}
        placeholderCharacter="●"
        placeholderTextColor='#ffffff'
      />
      {codeError?<Text style={styles.errorText}>❗Please fill all field</Text>:null}
      <View style={styles.buttonContainer}>
        <Button title={"Verify"} buttonFunction={verifyHandle}/>
      </View>
    </View>
  )
}

export default OTPScreen