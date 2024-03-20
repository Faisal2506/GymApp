import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT,SCREEN_WIDTH,getResponsiveFontSize } from '../../constants/constants';

export const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:"#000000",
    paddingHorizontal:SCREEN_WIDTH/40
  },
  imageBackground:{
    flex:1,
    resizeMode:"contain",
    height:SCREEN_HEIGHT/6,
  },
  chatTypeCard:{
    borderWidth:1,borderColor:"#fff",
    height:SCREEN_HEIGHT/6,
    marginBottom:SCREEN_HEIGHT/10,
    justifyContent:"space-around",
    alignItems:"center",
    borderRadius:20
  },
  trainerCardTitle:{
    color:"#D0FD3E",
    fontFamily:"NotoSansExtraBold",
    fontSize:getResponsiveFontSize(20),
    top:-SCREEN_HEIGHT/20
  },
  chatTypeTitle:{
    color:"red",
    fontFamily:"NotoSansExtraBold",
    fontSize:getResponsiveFontSize(14),
  }
})