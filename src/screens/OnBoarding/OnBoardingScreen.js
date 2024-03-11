import { Text, View, Image } from 'react-native'
import React from 'react'
import { styles } from './OnBoardingStyle'
import FocusAwareStatusBar from '../../components/StatusBar/FocusAwareStatusBar'
import Onboarding from 'react-native-onboarding-swiper'

const OnBoardingScreen = ({navigation}) => {
  const onDoneSkipPress = () =>{
    navigation.navigate("LoginScreen")
  }

  return (
    <View style={styles.mainContainer}>
      <FocusAwareStatusBar isLightBar={true} isTopSpace={true} isTransparent={true} />
      <Onboarding
        onDone={onDoneSkipPress}
        onSkip={onDoneSkipPress}
        containerStyles={styles.onBoardingSwiperContainer}
        transitionAnimationDuration= {0}
        pages={[
          {
            backgroundColor: '#000000',
            style: styles.onBoardingSwiperStyle,
            image: <Image source={require('../../../assets/images/OnBoarding/Background.png')} style={styles.imageStyle}/>,
            title: 'MEET YOUR COACH',
            subtitle: 'START YOUR JOURNEY',
            titleSyles: styles.titleStyle,
            subTitleStyles: styles.subTitleStyle
          },
          {
            backgroundColor: '#000000',
            image: <Image source={require('../../../assets/images/OnBoarding/Background1.png')} style={styles.imageStyle}/>,
            title: 'CREATE A WORKOUT PLAN',
            subtitle: 'TO STAY FIT',
            titleSyles: styles.titleStyle,
            subTitleStyles: styles.subTitleStyle
          },
          {
            backgroundColor: '#000000',
            image: <Image source={require('../../../assets/images/OnBoarding/Background2.png')} style={styles.imageStyle}/>,
            title: 'ACTION IS THE KEY',
            subtitle: "TO ALL SUCCES",
            titleSyles: styles.titleStyle,
            subTitleStyles: styles.subTitleStyle
          },
        ]}
      />
    </View>
  )
}
export default OnBoardingScreen

