import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FocusAwareStatusBar from '../../components/StatusBar/FocusAwareStatusBar'
import { styles } from './MyPlanStyle'
import Button from '../../components/Button/Button'


const MyPlanScreen = ({navigation}) => {
  const idHandle = () => {
    navigation.navigate('MembershipDetailsScreen')
  }
  return (
    <View style={styles.mainContainer}>
      <FocusAwareStatusBar isLightBar={true} isTopSpace={true} isTransparent={true} />
      <TouchableOpacity onPress={idHandle}>
      <Text style={styles.planDetails}>ID</Text>
      </TouchableOpacity>
      <Text style={styles.planDetails}>Membership Email ID</Text>
      <Text style={styles.planDetails}>Membership Name</Text>
      <Text style={styles.planDetails}>Monitor Trainer Name</Text>
      <Text style={styles.planDetails}>To Pay</Text>
      <Text style={styles.planDetails}>Paid</Text>
      <Text style={styles.planDetails}>Pending Balance</Text>
      <Text style={styles.planDetails}>Created date</Text>
      <Text style={styles.planDetails}>Start Date</Text>
      <Text style={styles.planDetails}>End Date</Text>
      <Button title={"Payment"} />
      <Text style={styles.planDetails}>Plan Status</Text>
      <Text style={styles.planDetails}>Freeze Status</Text>
      <Button title={"Attendance Report"} buttonStyle={styles.attendanceButton}/>
    </View>
  )
}

export default MyPlanScreen