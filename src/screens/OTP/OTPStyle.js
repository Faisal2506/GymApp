import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT,SCREEN_WIDTH,getResponsiveFontSize } from '../../constants/constants';

export const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    paddingHorizontal:SCREEN_WIDTH/30,
    backgroundColor:"#000000"
  },
  titleContainer:{
    marginTop:SCREEN_HEIGHT/30,
    width:SCREEN_WIDTH/1.7
  },
  title:{
    fontFamily:"NotoSansExtraBold",
    color:"#ffffff",
    fontSize:getResponsiveFontSize(24),
    marginBottom:SCREEN_HEIGHT/40
  },
  subTitle:{
    color:"#ffffff",
    fontFamily:"NotoSansRegular",
    fontSize:getResponsiveFontSize(12)
  },
  errorText:{
    color:"#ff4545",
    marginTop:SCREEN_HEIGHT/60,
    fontFamily:"NotoSansExtraBold"
  },
  buttonContainer:{
    marginTop:SCREEN_HEIGHT/10,
    alignSelf:"center"
  },
  otpContainer:{
    height:SCREEN_HEIGHT/6,
  },
  borderStyleBase: {
    width: 100,
    height: 100,
    borderColor:"red",
    borderWidth:1
  },
  underlineStyleBase: {
    width: SCREEN_WIDTH/5,
    height: SCREEN_HEIGHT/10,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: "#D0FD3E",
  },
})