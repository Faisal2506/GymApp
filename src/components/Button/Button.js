import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './ButtonStyle'

const Button = ({title, buttonFunction, buttonStyle}) => {
  return (
    <TouchableOpacity style={[styles.buttonContainer,buttonStyle]} onPress={buttonFunction}>
      <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button