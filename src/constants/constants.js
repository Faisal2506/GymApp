import { Dimensions, PixelRatio, Platform } from "react-native";
import * as Font from 'expo-font';

export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const SCREEN_WIDTH = Dimensions.get('window').width;

export const HEADER_HEIGHT = 60;
export const MOCKUP_WIDTH = 375;
export const CHANGE_BY_MOBILE_DPI = (temp) => (SCREEN_WIDTH / (MOCKUP_WIDTH / temp));

export const BUTTON_OPACITY = 1;
export const IS_ANDROID = () => { if (Platform.OS === 'android') { return true } else { return false } }
const getFontSize = PixelRatio.getFontScale()
export const getResponsiveFontSize = (size) => size / getFontSize

export let customFonts = {
  'NotoSansBold':require('../../assets/fonts/NotoSansLaoLooped-Bold.ttf'),
  'NotoSansExtraBold':require('../../assets/fonts/NotoSansLaoLooped-ExtraBold.ttf'),
  'NotoSansRegular':require('../../assets/fonts/NotoSansLaoLooped-Regular.ttf'),
  'NotoSansExtraLight' :require('../../assets/fonts/NotoSansLaoLooped-ExtraLight.ttf'),
  'OpenSansRegular' : require('../../assets/fonts/OpenSans-Regular.ttf'),
  'OpenSansBold' : require('../../assets/fonts/OpenSans-Bold.ttf'),
  'LoraBold' : require('../../assets/fonts/Lora-Bold.ttf'),
  'LoraRegular' : require('../../assets/fonts/Lora-Regular.ttf'),
  'LoraSemiBold' : require('../../assets/fonts/Lora-SemiBold.ttf')
}