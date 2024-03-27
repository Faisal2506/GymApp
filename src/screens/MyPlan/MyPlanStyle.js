import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT,SCREEN_WIDTH,getResponsiveFontSize } from '../../constants/constants';

export const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:"#000000",
    paddingHorizontal:SCREEN_WIDTH/40,
    paddingTop:SCREEN_HEIGHT/30,
  },
  cardContainer:{
    borderWidth:1,borderColor:"#D0FD3E",
    borderRadius:20,
    height:SCREEN_HEIGHT/2.18,
    elevation:1
  },
  planContents:{
    paddingTop:SCREEN_HEIGHT/60,
    paddingHorizontal:SCREEN_WIDTH/40
  },
  bgImage:{
    resizeMode:"contain",
    height:SCREEN_HEIGHT/2.19,
  },
  // idText:{
  //   color:"#D0FD3E",
  //   fontFamily:"NotoSansExtraLight"
  // },
  row:{
    flexDirection:"row",
    justifyContent:"space-between"
  },
  // paidToPay:{
  //   flexDirection:"row",
  //   justifyContent:"space-between"
  // },
  planDetails:{
    color:"#D0FD3E",
    fontSize:getResponsiveFontSize(16),
    fontFamily:"NotoSansExtraBold"
  },
  attendanceButton:{
    width:SCREEN_WIDTH/2
  },
  buttonStyle:{
    marginTop:SCREEN_HEIGHT/70
  }
})