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
    // borderColor:"red",
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
    fontFamily:"NotoSansBold",
    fontSize:getResponsiveFontSize(25)
  }
})