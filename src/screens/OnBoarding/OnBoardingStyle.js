import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT,SCREEN_WIDTH,getResponsiveFontSize } from '../../constants/constants';

export const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:"#000000"
  },
  onBoardingSwiperContainer:{
    // backgroundColor:"red",
  },
  imageStyle:{
    top:-SCREEN_HEIGHT/7.3,
    width:SCREEN_WIDTH,
    height:SCREEN_HEIGHT/1.6,
    resizeMode:"contain"  
  },
  titleStyle:{
    fontFamily:"LoraBold",
    fontSize:50
  },
  subTitleStyle:{
    fontFamily:"LoraRegular"
  }
})