import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT,SCREEN_WIDTH,getResponsiveFontSize } from '../../constants/constants';

export const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:"#000000",
    paddingHorizontal:SCREEN_WIDTH/25
  },
  welcomeContainer:{
    marginTop:SCREEN_HEIGHT/20
  },
  usernameText:{
    color:"#fff",
    fontFamily:"NotoSansExtraBold",
    fontSize:getResponsiveFontSize(30)
  },
  welcomeText:{
    color:"#fff",
    fontFamily:"NotoSansRegular",
    fontSize:getResponsiveFontSize(16)
  },
  cardTitleContainer:{
    // borderWidth:1,
    marginTop:SCREEN_HEIGHT/20,
    marginBottom:SCREEN_HEIGHT/30,
    borderColor:"#fff",
    flexDirection:"row",
    justifyContent:"space-between",
  },
  cardTitle:{
    color:"#fff",
    fontFamily:"NotoSansRegular"

  },
  dateText:{
    color:"#D0FD3E",
    fontFamily:"NotoSansRegular"


  },
  dailyCardContainer:{
    // borderWidth:1,
    borderColor:"#fff",
    alignItems:"center"
  },
  imageStyle:{
  }
})