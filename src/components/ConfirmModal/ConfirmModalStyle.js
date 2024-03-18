import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT,SCREEN_WIDTH,getResponsiveFontSize } from '../../constants/constants';

export const styles = StyleSheet.create({
  centerModal:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#00000099"
  },
  mainContainer:{
    height:SCREEN_HEIGHT/5,
    width:SCREEN_WIDTH/1.16,
    // borderWidth:1
    backgroundColor:"#999",
    justifyContent:"space-between",
    paddingVertical:SCREEN_HEIGHT/40,
    borderRadius:10,
    paddingHorizontal:SCREEN_WIDTH/30
  },
  text:{
    fontFamily:"NotoSansExtraBold",
    color:"#D0FD3E",
    fontSize:getResponsiveFontSize(20),
    // marginLeft:SCREEN_WIDTH/20
    textAlign:"center"
  },
  buttonContainer:{
    flexDirection:"row",
    justifyContent:"space-between"
  }
})