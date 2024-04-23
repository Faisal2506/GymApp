import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT,SCREEN_WIDTH,getResponsiveFontSize } from '../../constants/constants';

export const styles = StyleSheet.create({ 
  mainContainer:{
    flex:1,
    height:SCREEN_HEIGHT,
    paddingHorizontal:SCREEN_WIDTH/25
  },
  welcomeContainer:{
    marginTop:SCREEN_HEIGHT/20,
  },
  usernameText:{
    fontFamily:"NotoSansExtraBold",
    fontSize:getResponsiveFontSize(30)
  },
  welcomeText:{
    color:"#fff",
    fontFamily:"NotoSansBold",
    color:"#D0FD3E",
    fontSize:getResponsiveFontSize(16)
  },
  cardTitleContainer:{
    marginTop:SCREEN_HEIGHT/20,
    marginBottom:SCREEN_HEIGHT/30,
    flexDirection:"row",
    justifyContent:"space-between",
  },
  cardTitle:{
    fontFamily:"NotoSansExtraBold",
    marginLeft:SCREEN_WIDTH/20
  },
  dailyDate:{
    color:"#D0FD3E",
    fontFamily:"NotoSansExtraBold",
    marginRight:SCREEN_WIDTH/20
  },
  cardContainer:{
    alignItems:"center"
  },
  imageStyle:{
  },
  trafficTitle:{
    color:"#D0FD3E",
    fontFamily:"NotoSansExtraBold",
    paddingLeft:SCREEN_WIDTH/40,
    fontSize:getResponsiveFontSize(18),
    marginTop:SCREEN_HEIGHT/40
  },
  row:{
    flexDirection:"row",
    width:SCREEN_WIDTH/1.4,
    alignItems:"center",
    marginTop:SCREEN_HEIGHT/80,
  },
  greenTraffic:{
    height:SCREEN_HEIGHT/20,
    width:SCREEN_WIDTH/9,
    borderRadius:999,
    backgroundColor:"#2dc937"
  },
  orangeTraffic:{
    height:SCREEN_HEIGHT/20,
    width:SCREEN_WIDTH/9,
    borderRadius:999,
    backgroundColor:"#e7b416"
  },
  redTraffic:{
    height:SCREEN_HEIGHT/20,
    width:SCREEN_WIDTH/9,
    borderRadius:999,
    backgroundColor:"#cc3232"
  },
  trafficText:{
    color:"#D0FD3E",
    fontFamily:"NotoSansExtraBold",
    marginLeft:SCREEN_WIDTH/50,
    fontSize:getResponsiveFontSize(13),
  }
})