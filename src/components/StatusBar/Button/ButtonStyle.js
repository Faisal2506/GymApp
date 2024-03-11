import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT,SCREEN_WIDTH,getResponsiveFontSize } from '../../../constants/constants';

export const styles = StyleSheet.create({
  buttonContainer:{
    borderWidth:1,
    borderColor:"red",
    height:SCREEN_HEIGHT/15,
    marginHorizontal:SCREEN_WIDTH/4,
    borderRadius:30
  }
})