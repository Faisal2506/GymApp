import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT,SCREEN_WIDTH,getResponsiveFontSize } from '../../constants/constants';

export const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:"#000000"
  },
  dietDetails:{
    color:"#fff",
    fontFamily:"NotoSansExtraBold",
    marginLeft:SCREEN_WIDTH/30,
    marginBottom:SCREEN_HEIGHT/40
  },
  dietInfo:{
    // borderWidth:1,borderColor:"#fff",
    marginTop:SCREEN_HEIGHT/20,
    paddingHorizontal:SCREEN_WIDTH/40
  },
  detailsContainer:{
    flexDirection:"row"
  }
})