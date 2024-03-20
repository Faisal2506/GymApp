import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT,SCREEN_WIDTH,getResponsiveFontSize } from '../../../constants/constants';

export const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:"#000000",
    paddingTop:SCREEN_HEIGHT/9
  },
  detailsContainer:{
    marginTop:SCREEN_HEIGHT/16,
    paddingHorizontal:SCREEN_WIDTH/40
  },
  detailsText:{
    color:"#D0FD3E",
    fontFamily:"NotoSansExtraBold",
    fontSize:getResponsiveFontSize(20)
  }
})