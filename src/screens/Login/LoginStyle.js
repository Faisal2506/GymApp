import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT,SCREEN_WIDTH,getResponsiveFontSize } from '../../constants/constants';

export const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:"#000000"
  },
  imageStyle:{
    height:SCREEN_HEIGHT/1.6,
    width:SCREEN_WIDTH,
    resizeMode:"contain"
  },
  bottomHalf:{
    borderWidth:1,
    height:SCREEN_HEIGHT/2.6
  },
  userName:{
    color:"#ffffff"
  },
  emailInput:{
    height: SCREEN_HEIGHT/12,
    borderBottomWidth:1,
    marginHorizontal:SCREEN_WIDTH/20,
    paddingLeft:SCREEN_WIDTH/30,
    paddingBottom:SCREEN_HEIGHT/50,
    borderColor:"#999",
    fontFamily:"NotoSansRegular",
    fontSize:getResponsiveFontSize(18),
    color:"#ffffff",
  },
  errorText:{
    color:"#ff4545",
    marginTop:SCREEN_HEIGHT/50,
    marginLeft:SCREEN_WIDTH/30,
    fontFamily:"NotoSansExtraBold"
  },
  loginContainer:{
    flexDirection:"row",
    marginTop:SCREEN_HEIGHT/20,
    borderWidth:1,
    justifyContent:"space-around"
  },
  iconContainer:{
    borderWidth:1,
    backgroundColor:"#999",
    height:SCREEN_HEIGHT/15,
    width:SCREEN_HEIGHT/15,
    borderRadius:999,
    justifyContent:'center',
    alignItems:'center'
  },
  loginBtnContainer:{
    height:SCREEN_HEIGHT/15,
    width:SCREEN_WIDTH/3,
    borderRadius:30,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-evenly",
    backgroundColor:"#D0FD3E"
  },
  loginText:{
    color:"#000000",
    fontFamily:"LoraBold",
    fontSize:getResponsiveFontSize(16)
  }
})