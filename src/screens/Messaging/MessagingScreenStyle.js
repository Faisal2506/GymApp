import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT,SCREEN_WIDTH,getResponsiveFontSize } from '../../constants/constants';

export const styles = StyleSheet.create({
  mainContainer:{
    flex:1
  },
  headingContainer:{
    borderWidth:1,borderColor:"#fff",
    justifyContent:"center",
    alignItems:"center",
    height:SCREEN_HEIGHT/10,
    backgroundColor: "#f5f5dc"
  },
  heading:{
    color:"#fff",
    fontFamily:"NotoSansExtraBold",
    fontSize: getResponsiveFontSize(24)
  }
})