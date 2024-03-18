import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT,SCREEN_WIDTH,getResponsiveFontSize } from '../../constants/constants';

export const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:"#D0FD3E",
    // paddingHorizontal:SCREEN_WIDTH/40,
  },
  topSection:{
    height:SCREEN_HEIGHT/4,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#D0FD3E"
  },
  title:{
    color:"#000",
    fontFamily:"NotoSansExtraBold",
    fontSize:getResponsiveFontSize(28)
  },
  bottomSection:{
    backgroundColor:"#000000",
    borderTopRightRadius:15,
    borderTopLeftRadius:15,
    flex:1,
    paddingHorizontal:SCREEN_WIDTH/40,
    // paddingTop:SCREEN_HEIGHT/20
  },
  detailsContainer:{
    paddingTop:SCREEN_HEIGHT/20,
  },
  calculateBtnStyle:{
    width:SCREEN_WIDTH/3.2,
    marginLeft:SCREEN_WIDTH/5,
  },
  saveBtnContainer:{
    alignSelf:"center"
  },
  errorText:{
    color:"#ff4545",
    marginTop:SCREEN_HEIGHT/50,
    marginLeft:SCREEN_WIDTH/30,
    fontFamily:"NotoSansExtraBold"
  },
  text:{
    color:"#ffffff",
    fontFamily:"NotoSansExtraBold",
    fontSize:getResponsiveFontSize(18),
    marginLeft:SCREEN_WIDTH/30
  },
  input:{
    borderBottomWidth:1,
    borderColor:"#ffffff",
    height:SCREEN_HEIGHT/15,
    color:"#ffffff",
    paddingLeft:SCREEN_WIDTH/20,
    borderRadius:20
  },
})