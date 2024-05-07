import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT,SCREEN_WIDTH,getResponsiveFontSize } from '../../constants/constants';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    right: 0
  },
  button: {
    // position: 'absolute',
    bottom: 70,
    right:20,
    width: 60,
    height:60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    shadowRadius: 10,
    // shadowColor: "#f02a4b",
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 10
    },
    elevation: 5
  },
  menu: {
    backgroundColor: "black",
  },
  secondary: {
    backgroundColor: "black"
  }
})