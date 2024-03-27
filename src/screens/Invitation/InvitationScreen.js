import { View, Text, Image } from 'react-native'
import React from 'react'
import FocusAwareStatusBar from '../../components/StatusBar/FocusAwareStatusBar'
import { styles } from './InvitationStyle'

const InvitationScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <FocusAwareStatusBar isLightBar={true} isTopSpace={true} isTransparent={true} />
      <Image source={require("../../../assets/images/Invitation/invitation01.jpg")} style={styles.imageStyle} />
      <View style={styles.allDetailsContainer}>
      <View style={styles.detailesContainer}><Text style={styles.invitationDetails}>ID</Text></View>
      <View style={styles.detailesContainer}><Text style={styles.invitationDetails}>Type</Text></View>
      <View style={styles.detailesContainer}><Text style={styles.invitationDetails}>Title</Text></View>
      <View style={styles.detailesContainer}><Text style={styles.invitationDetails}>Description</Text></View>
      <View style={styles.detailesContainer}><Text style={styles.invitationDetails}>Date</Text></View>
      <View style={styles.detailesContainer}><Text style={styles.invitationDetails}>From Time</Text></View>
      <View style={styles.detailesContainer}><Text style={styles.invitationDetails}>To Time</Text></View>
      <View style={styles.detailesContainer}><Text style={styles.invitationDetails}>Status</Text></View>
      <View style={styles.detailesContainer}><Text style={styles.invitationDetails}>Created Date</Text></View>
      </View>
      {/* <Text style={styles.invitationDetails}>Type</Text>
      <Text style={styles.invitationDetails}>Title</Text>
      <Text style={styles.invitationDetails}>Description</Text>
      <Text style={styles.invitationDetails}>Date</Text>
      <Text style={styles.invitationDetails}>From Time</Text>
      <Text style={styles.invitationDetails}>To Time</Text>
      <Text style={styles.invitationDetails}>Status</Text>
      <Text style={styles.invitationDetails}>Created Date</Text> */}
    </View>
  )
}

export default InvitationScreen