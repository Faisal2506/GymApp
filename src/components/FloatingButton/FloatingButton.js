import { View, Text, Animated, TouchableOpacity } from 'react-native'
import React, { useRef } from 'react'
import { styles } from './FloatingButtonStyle'
import { AntDesign, Entypo, Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../context/ThemeContext'


const FloatingButton = () => {
  const { theme } = useTheme();
  const navigation = useNavigation();
  const animation = useRef(new Animated.Value(0)).current;
  const [open,setOpen] = React.useState(false);
  
  const toggleMenu = () => {
    const toValue = open?0:1;
    Animated.spring(animation,{
      toValue,
      friction: 5,
      useNativeDriver: true
    }).start();

    setOpen(!open)
  }

  const rotation = {
    transform:[
      {
        rotate: animation.interpolate({
          inputRange: [0,1],
          outputRange: ["0deg", "135deg"]
        })
      }
    ]
  }

  const getAnimatedStyle = (index) => {
    const angle = (index*(120/2) + 75);
    const radius = 90;

    const translateY = animation.interpolate({
      inputRange: [0,100],
      outputRange: [0, -radius * Math.sin((angle*Math.PI)/180)]
    });
    const translateX = animation.interpolate({
      inputRange: [0,1000],
      outputRange: [0, radius * Math.cos((angle*Math.PI)/180)]
    });
    return {
      transform: [
        {scale: animation},
        {translateX}, {translateY}
      ]
    }
  }

  const chatHandle = () => {
    navigation.navigate('ChatScreen')
  }

  const inviteHandle = () => {
    navigation.navigate("InvitationScreen")
  }

  return (
    <View style={styles.container}>
      {
        open && 
        [...Array(2)].map((_, index) => (
          <TouchableOpacity key={index}>
            <Animated.View style={[styles.button, styles.secondary, getAnimatedStyle(index), { backgroundColor: "blue"}]}>
              {
                index === 0 ? (
                  <Entypo 
                    name='chat'
                    size={30}
                    color={theme.greenText}
                    onPress={chatHandle}
                  />
                ) : (
                  <Octicons 
                    name='cross-reference'
                    size={30}
                    color={theme.greenText}
                    onPress={inviteHandle}
                  />
                )
              }
            </Animated.View>
          </TouchableOpacity>
        ))
      }
      <TouchableOpacity onPress={toggleMenu}>
        <Animated.View style={[styles.button, styles.menu, rotation, ]}>
          <AntDesign name='plus' size={24} color={theme.greenText} />
        </Animated.View>
      </TouchableOpacity> 
    </View>
  )
}

export default FloatingButton