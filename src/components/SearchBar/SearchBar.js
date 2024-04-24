import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { styles } from './SearchBarStyle'
import { useTheme } from '../../context/ThemeContext'

const SearchBar = ({placeholder}) => {
  const { theme } = useTheme();
  return (
    <View>
      <TextInput 
        style={[styles.input,{color: theme.backgroundColor}]}
        placeholder={placeholder}
        placeholderTextColor={theme.backgroundColor}
      />
    </View>
  )
}

export default SearchBar