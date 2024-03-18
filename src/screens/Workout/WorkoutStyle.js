import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT,SCREEN_WIDTH,getResponsiveFontSize } from '../../constants/constants';

export const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:"#000000",
    paddingHorizontal:SCREEN_WIDTH/40,
    paddingTop:SCREEN_HEIGHT/40
  },
  buttonContainer:{
    marginLeft:SCREEN_WIDTH/1.9
  },
  addWorkoutBtn:{
    width:SCREEN_WIDTH/2.5
  },
  workoutTableContainer:{
    marginTop:SCREEN_HEIGHT/30
  }
})