import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT,SCREEN_WIDTH,getResponsiveFontSize } from '../../constants/constants';

export const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:"#000000",
    paddingHorizontal:SCREEN_WIDTH/40
  },
  buttonContainer:{
    left:SCREEN_WIDTH/3.4
  },
  addWorkoutBtn:{
    width:SCREEN_WIDTH/2.5
  }
})