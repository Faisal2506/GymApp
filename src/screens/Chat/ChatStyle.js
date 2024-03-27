import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT,SCREEN_WIDTH,getResponsiveFontSize } from '../../constants/constants';

export const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:"#000000",
    paddingHorizontal:SCREEN_WIDTH/40
  },
  chatTypeCard:{
    height:SCREEN_HEIGHT/6,
    borderRadius:20,
    justifyContent:"space-between",alignItems:"center",
    flexDirection:"row",
    paddingHorizontal:SCREEN_WIDTH/30,
    backgroundColor:"#2C2C2E",
    elevation:1,
    marginBottom:SCREEN_HEIGHT/40
  },
  chatTypeTitle:{
    color:"#D0FD3E",
    fontSize:getResponsiveFontSize(13),
    fontFamily:"NotoSansExtraBold",
  },
  imageStyle:{
    height:SCREEN_HEIGHT/12,
    width:SCREEN_WIDTH/6,
    borderRadius:999,
  },
  trainerCardTitle:{
    color:"#D0FD3E",
    fontSize:getResponsiveFontSize(18),
    fontFamily:"NotoSansExtraBold",
    marginVertical:SCREEN_HEIGHT/60
  }
  // imageBackground:{
  //   flex:1,
  //   width:SCREEN_WIDTH/1.05,
  //   resizeMode:"contain",
  //   height:SCREEN_HEIGHT/6,
  // },
  // chatTypeCard:{
  //   // borderWidth:1,borderColor:"#fff",
  //   height:SCREEN_HEIGHT/6,
  //   marginBottom:SCREEN_HEIGHT/10,
  //   justifyContent:"space-around",
  //   alignItems:"center",
  //   borderRadius:20
  // },
  // trainerCardTitle:{
  //   color:"#D0FD3E",
  //   fontFamily:"NotoSansExtraBold",
  //   fontSize:getResponsiveFontSize(20),
  //   top:-SCREEN_HEIGHT/20
  // },
  // chatTypeTitle:{
  //   color:"red",
  //   fontFamily:"NotoSansExtraBold",
  //   fontSize:getResponsiveFontSize(14),
  //   marginTop:SCREEN_HEIGHT/17,
  //   textAlign:"center"
  // },
  // chatTypeOwner:{
  //   color:"red",
  //   fontFamily:"NotoSansExtraBold",
  //   fontSize:getResponsiveFontSize(14),
  //   // marginTop:SCREEN_HEIGHT/17,
  //   textAlign:"center"
  // },
  // row:{
  //   flexDirection:"row"
  // }
})