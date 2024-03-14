import { View, Text } from 'react-native'
import React from 'react'
import FocusAwareStatusBar from '../../components/StatusBar/FocusAwareStatusBar'
import { styles } from './InvitationStyle'

const InvitationScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <FocusAwareStatusBar isLightBar={true} isTopSpace={true} isTransparent={true} />
      <Text style={styles.invitationDetails}>ID</Text>
      <Text style={styles.invitationDetails}>Type</Text>
      <Text style={styles.invitationDetails}>Title</Text>
      <Text style={styles.invitationDetails}>Description</Text>
      <Text style={styles.invitationDetails}>Date</Text>
      <Text style={styles.invitationDetails}>From Time</Text>
      <Text style={styles.invitationDetails}>To Time</Text>
      <Text style={styles.invitationDetails}>Status</Text>
      <Text style={styles.invitationDetails}>Created Date</Text>
    </View>
  )
}

export default InvitationScreen