import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const DarkModeSwitch = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <TouchableOpacity onPress={toggleTheme}>
      <MaterialCommunityIcons 
        name={isDarkMode? 'weather-night' : 'weather-sunny'}
        size={40}
        color={isDarkMode?"#fff":"#000"}
      />
    </TouchableOpacity>
  )
}

export default DarkModeSwitch;