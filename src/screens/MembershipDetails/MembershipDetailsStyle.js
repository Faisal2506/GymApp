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
    marginVertical:SCREEN_HEIGHT/50,
    fontFamily:"LoraRegular",
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
    justifyContent:"center",
    height:SCREEN_HEIGHT/20
  },
  detailsText:{
    color:"#fff",
    marginLeft:SCREEN_WIDTH/30,
    fontFamily:"LoraBold",
    color:"#D0FD3E"
  },
  memberInfo:{
    height:SCREEN_HEIGHT/2
  },
  payment:{
    height:SCREEN_HEIGHT/1.2
  }
})