import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import FocusAwareStatusBar from '../../components/StatusBar/FocusAwareStatusBar'
import { styles } from './MyPlanStyle'
import Button from '../../components/Button/Button'
import { useRoute, useNavigation } from '@react-navigation/native';


const MyPlanScreen = ({navigation}) => {
  const idHandle = () => {
    navigation.navigate('MembershipDetailsScreen')
  }
  const freezeHandle = () => {
    navigation.navigate("FreezeListingScreen")
  }
  const route = useRoute();
  // const { freeze } = route.params;
  return (
    <View style={styles.mainContainer}>
      <FocusAwareStatusBar isLightBar={true} isTopSpace={true} isTransparent={true} />
      <View style={styles.cardContainer}>
        <ImageBackground source={require('../../../assets/images/MyPlan/bg1.png')} imageStyle={{borderRadius:999}} style={styles.bgImage} resizeMethod="resize" resizeMode='cover'>
          <View style={styles.planContents}>
      <View style={styles.row}>
      <TouchableOpacity onPress={idHandle}>
      <Text style={[styles.planDetails,styles.underline]}>ID</Text>
      </TouchableOpacity>
      <Text style={styles.planDetails}>Membership Email ID</Text>
      </View>
      <Text style={styles.planDetails}>Membership Name</Text>
      <Text style={styles.planDetails}>Monitor Trainer Name</Text>
      <View style={styles.row}>
      <Text style={styles.planDetails}>Paid</Text>
      <Text style={styles.planDetails}>To Pay</Text>
      </View>
      <Text style={styles.planDetails}>Pending Balance</Text>
      <Text style={styles.planDetails}>Created date</Text>
      <View style={styles.row}>
      <Text style={styles.planDetails}>Start Date</Text>
      <Text style={styles.planDetails}>End Date</Text>
      </View>
      <Text style={styles.planDetails}>Plan Status</Text>
      <Button title={"Freeze"} buttonFunction={freezeHandle} buttonStyle={styles.buttonStyle}/>
      <View style={styles.row}>
      <Button title={"Payment"} buttonStyle={styles.buttonStyle}/>
      <Button title={"Attendance Report"} buttonStyle={[styles.buttonStyle,styles.attendanceButton]}/>
      </View>
      </View>
      </ImageBackground>
      </View>
    </View>
  )
}

export default MyPlanScreen