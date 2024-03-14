import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT,SCREEN_WIDTH,getResponsiveFontSize } from '../../constants/constants';

export const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:"#000000",
    paddingHorizontal:SCREEN_WIDTH/40,
    paddingTop:SCREEN_HEIGHT/30
  },
  planDetails:{
    color:"#fff",
    fontSize:getResponsiveFontSize(16),
    fontFamily:"NotoSansExtraBold"
  },
  attendanceButton:{
    width:SCREEN_WIDTH/2
  }
})