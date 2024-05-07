import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT,SCREEN_WIDTH,getResponsiveFontSize } from '../../constants/constants';

export const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:"#000000",
    paddingHorizontal:SCREEN_WIDTH/30
  },
  activeStyle:{
    opacity:1
  },
  inactiveStyle:{
    opacity:0.3
  },
  details:{
    color:"#D0FD3E",
    fontFamily:"LoraBold",
    fontSize:getResponsiveFontSize(20),
    marginBottom:SCREEN_HEIGHT/50
  }
})