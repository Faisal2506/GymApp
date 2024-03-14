import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT,SCREEN_WIDTH,getResponsiveFontSize } from '../../constants/constants';

export const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:"#000000"
  },
  details:{
    borderWidth:1,borderColor:"#fff",
    paddingHorizontal:SCREEN_WIDTH/30,
    borderRadius:20,
    height:SCREEN_HEIGHT/3,
    justifyContent:"space-evenly"
  },
  container:{
    borderBottomWidth:1,
    borderColor:"#fff",
    // paddingBottom:SCREEN_HEIGHT/30,
    justifyContent:"center",
  },
  detailsText:{
    color:"#fff"
  }
})