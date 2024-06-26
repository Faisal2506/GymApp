import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import FocusAwareStatusBar from '../../components/StatusBar/FocusAwareStatusBar'
import { styles } from './DietStyle'
import ImageSlider from '../../components/ImageSlider/ImageSlider'
import { Entypo, FontAwesome6, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { useTheme } from '../../context/ThemeContext'

const DietScreen = () => {
  const { theme, isDarkMode } = useTheme();
  return (
    <ScrollView style={[styles.mainContainer,{backgroundColor: theme.backgroundColor}]}>
      <FocusAwareStatusBar isLightBar={isDarkMode?true:false} isTopSpace={true} isTransparent={true} />
      <ImageSlider />
      <View style={styles.dietInfo}>
      <View style={styles.detailsContainer}>
      <Ionicons
      name='receipt'
      size={25}
      color="#7928CA"
      />
      <Text style={[styles.dietDetails,{color: theme.textColor}]}>ID : </Text>
      </View>
      <View style={styles.detailsContainer}>
      <MaterialCommunityIcons
      name='food-apple'
      size={25}
      color="#fd0000"
      />
      <Text style={[styles.dietDetails,{color: theme.textColor}]}>Type : </Text>
      </View>
      <View style={styles.detailsContainer}>
      <Entypo
      name='user'
      size={25}
      color="#add8e6"
      />
      <Text style={[styles.dietDetails,{color: theme.textColor}]}>Name : </Text>
      </View>
      <View style={styles.detailsContainer}>
      <Ionicons
      name='send-sharp'
      size={25}
      color="#1fea00"
      />
      <Text style={[styles.dietDetails,{color: theme.textColor}]}>Send By : </Text>
      </View>
      <View style={styles.detailsContainer}>
      <FontAwesome6
      name='file-pdf'
      size={25}
      color="#FFA500"
      />
      <Text style={[styles.dietDetails,{color: theme.textColor}]}>View PDF</Text>
      </View>
      <View style={styles.detailsContainer}>
      <FontAwesome6
      name='calendar-day'
      size={25}
      color="#f4e664"
      />
      <Text style={[styles.dietDetails,{color: theme.textColor}]}>Created Date and Time : </Text>
      </View>
      </View>
    </ScrollView>
  )
}

export default DietScreen