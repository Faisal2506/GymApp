import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { styles } from './SearchBarStyle'

const SearchBar = ({placeholder}) => {
  return (
    <View>
      <TextInput 
        style={styles.input}
        placeholder={placeholder}
        
      />
    </View>
  )
}

export default SearchBar