import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT,SCREEN_WIDTH,getResponsiveFontSize } from '../../constants/constants';

export const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:"#000000",
    paddingHorizontal:SCREEN_WIDTH/40
  },
  invitationDetails:{
    color:"#D0FD3E",
    fontFamily:"NotoSansExtraBold",
    fontSize:getResponsiveFontSize(18)
  }
})