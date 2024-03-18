import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT,SCREEN_WIDTH,getResponsiveFontSize } from '../../constants/constants';

export const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:"#000000",
  },
  activeStyle:{
    opacity:1
  },
  inactiveStyle:{
    opacity:0.3
  }
})