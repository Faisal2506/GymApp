import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT,SCREEN_WIDTH,getResponsiveFontSize } from '../../constants/constants';

export const styles = StyleSheet.create({
  buttonContainer:{
    // borderWidth:1,
    // borderColor:"red",
    backgroundColor:"#D0FD3E",
    height:SCREEN_HEIGHT/15,
    width:SCREEN_WIDTH/3,
    // marginHorizontal:SCREEN_WIDTH/4,
    borderRadius:30,
    justifyContent:"center",
    alignItems:"center",
  },
  buttonTitle:{
    fontFamily:"NotoSansBold",
    fontSize:getResponsiveFontSize(18),
    textAlign:'center'
  }
})