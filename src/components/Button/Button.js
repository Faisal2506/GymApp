import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './ButtonStyle'
import { useTheme } from '../../context/ThemeContext'

const Button = ({title, buttonFunction, buttonStyle}) => {
  const { theme } = useTheme();
  return (
    <TouchableOpacity style={[styles.buttonContainer,buttonStyle,{backgroundColor: theme.greenText}]} onPress={buttonFunction}>
      <Text style={[styles.buttonTitle,{color: theme.backgroundColor}]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button