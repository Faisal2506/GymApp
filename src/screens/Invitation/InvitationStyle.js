import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT,SCREEN_WIDTH,getResponsiveFontSize } from '../../constants/constants';

export const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:"#000000",
    // paddingHorizontal:SCREEN_WIDTH/40
  },
  invitationDetails:{
    color:"#D0FD3E",
    fontFamily:"NotoSansExtraBold",
    fontSize:getResponsiveFontSize(18)
  },
  imageStyle:{
    height:SCREEN_HEIGHT/5,
    width:SCREEN_WIDTH,
    borderRadius:30
  },
  detailesContainer:{
    // borderWidth:0.5,borderColor:"#fff",
    borderRadius:12,
    height:SCREEN_HEIGHT/17,
    justifyContent:"center",
    paddingLeft:SCREEN_WIDTH/30,
    backgroundColor:"#3c3c3c",
    marginTop:SCREEN_HEIGHT/45,
  },
  allDetailsContainer:{
    paddingHorizontal:SCREEN_WIDTH/30
  }
})