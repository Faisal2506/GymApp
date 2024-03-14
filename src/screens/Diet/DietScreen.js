import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import FocusAwareStatusBar from '../../components/StatusBar/FocusAwareStatusBar'
import { styles } from './DietStyle'
import ImageSlider from '../../components/ImageSlider/ImageSlider'
import { Entypo, FontAwesome6, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

const DietScreen = () => {
  return (
    <ScrollView style={styles.mainContainer}>
      <FocusAwareStatusBar isLightBar={true} isTopSpace={true} isTransparent={true} />
      <ImageSlider />
      <View style={styles.dietInfo}>
      <View style={styles.detailsContainer}>
      <Ionicons
      name='receipt'
      size={20}
      color="#7928CA"
      />
      <Text style={styles.dietDetails}>ID : </Text>
      </View>
      <View style={styles.detailsContainer}>
      <MaterialCommunityIcons
      name='food-apple'
      size={20}
      color="#fd0000"
      />
      <Text style={styles.dietDetails}>Type : </Text>
      </View>
      <View style={styles.detailsContainer}>
      <Entypo
      name='user'
      size={20}
      color="#add8e6"
      />
      <Text style={styles.dietDetails}>Name : </Text>
      </View>
      <View style={styles.detailsContainer}>
      <Ionicons
      name='send-sharp'
      size={20}
      color="#1fea00"
      />
      <Text style={styles.dietDetails}>Send By : </Text>
      </View>
      <View style={styles.detailsContainer}>
      <FontAwesome6
      name='file-pdf'
      size={20}
      color="#ffffff"
      />
      <Text style={styles.dietDetails}>View PDF</Text>
      </View>
      <View style={styles.detailsContainer}>
      <FontAwesome6
      name='calendar-day'
      size={20}
      color="#f4e664"
      />
      <Text style={styles.dietDetails}>Created Date and Time : </Text>
      </View>
      {/* <Text style={styles.dietDetails}>Type: Non Veg</Text>
      <Text style={styles.dietDetails}>Name: </Text>
      <Text style={styles.dietDetails}>Send By: </Text>
      <Text style={styles.dietDetails}>View PDF</Text>
      <Text style={styles.dietDetails}>Created Date and Time:</Text> */}
      </View>
    </ScrollView>
  )
}

export default DietScreen