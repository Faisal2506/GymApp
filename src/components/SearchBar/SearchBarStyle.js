import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT,SCREEN_WIDTH,getResponsiveFontSize } from '../../constants/constants';

export const styles = StyleSheet.create({
  input:{
    borderWidth:1,
    borderColor:"#fff",
    height:SCREEN_HEIGHT/15,
    width:SCREEN_WIDTH/2,
    alignSelf:"center",
    marginTop:SCREEN_HEIGHT/40,
    borderRadius:30,
    backgroundColor:"#999",
    textAlign:"center"
  }
})