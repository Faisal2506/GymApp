import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT,SCREEN_WIDTH,getResponsiveFontSize } from '../../constants/constants';

export const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:"#000000",
    paddingHorizontal:SCREEN_WIDTH/40
  },
  detailsTitle:{
    color:"#F37293",
    fontSize:getResponsiveFontSize(18),
    marginLeft:SCREEN_WIDTH/30,
    // borderWidth:1,borderColor:"#fff",
    marginVertical:SCREEN_HEIGHT/50,
    fontFamily:"NotoSansExtraBold",
  },
  details:{
    // borderWidth:1,borderColor:"#999",
    paddingHorizontal:SCREEN_WIDTH/30,
    borderRadius:20,
    height:SCREEN_HEIGHT/3,
    justifyContent:"space-evenly",
    backgroundColor:"#999"
  },
  container:{
    borderBottomWidth:1,
    borderColor:"#fff",
    // paddingBottom:SCREEN_HEIGHT/50,
    justifyContent:"center",
    height:SCREEN_HEIGHT/20
  },
  detailsText:{
    color:"#fff",
    marginLeft:SCREEN_WIDTH/30,
    fontFamily:"NotoSansExtraBold",
    color:"#D0FD3E"
  },
  memberInfo:{
    height:SCREEN_HEIGHT/2
  },
  payment:{
    height:SCREEN_HEIGHT/1.2
  }
})