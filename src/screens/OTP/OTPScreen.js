import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './OTPStyle'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import FocusAwareStatusBar from '../../components/StatusBar/FocusAwareStatusBar'
import Button from '../../components/Button/Button'
import { useTheme } from '../../context/ThemeContext'


const OTPScreen = ({navigation}) => {
  const  { theme } = useTheme();
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
      navigation.navigate('DashboardScreen')
    } 
  return (
    <View style={[styles.mainContainer,{backgroundColor:theme.backgroundColor}]}>
      <FocusAwareStatusBar isLightBar={true} isTopSpace={true} isTransparent={true} />
      <View style={styles.titleContainer}>
        <Text style={[styles
          .title,{color:theme.textColor}]}>VERIFICATION</Text>
        <Text style={[styles.subTitle,{color:theme.textColor}]}>CHECK YOUR EMAIL... WE'VE SENT YOU THE PIN AT YOUR EMAIL.</Text>
      </View>
      <OTPInputView
        style={styles.otpContainer}
        pinCount={4}
        // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
        // onCodeChanged = {code => { this.setState({code})}}
        autoFocusOnLoad
        codeInputFieldStyle={[styles.underlineStyleBase,{color: theme.greenText, borderColor: theme.greenText}]}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={handleCodeFilled}
        placeholderCharacter="●"
        placeholderTextColor= {theme.greenText}
        selectionColor="green"
      />
      {codeError?<Text style={styles.errorText}>❗Please fill all field</Text>:null}
      <View style={styles.buttonContainer}>
        <Button title={"Verify"} buttonFunction={verifyHandle}/>
      </View>
    </View>
  )
}

export default OTPScreen