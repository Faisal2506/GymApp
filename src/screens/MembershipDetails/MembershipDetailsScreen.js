import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './MembershipDetailsStyle'
import FocusAwareStatusBar from '../../components/StatusBar/FocusAwareStatusBar'
import { useTheme } from '../../context/ThemeContext'

const MembershipDetailsScreen = () => {
  const { theme, isDarkMode } = useTheme();
  return (
    <ScrollView style={[styles.mainContainer,{backgroundColor: theme.backgroundColor}]}>
      <FocusAwareStatusBar isLightBar={isDarkMode?true:false} isTopSpace={true} isTransparent={true} />
      <View style={styles.details}>
        <View style={styles.container}>
          <Text style={styles.detailsText}>Payment</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.detailsText}>Follow Up</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.detailsText}>Add Days Tab</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.detailsText}>Manual Attendance</Text>
        </View>
        <View style={[styles.container, { borderBottomWidth: 0 }]}>
          <Text style={styles.detailsText}>Attendance Report</Text>
        </View>
      </View>
      <Text style={styles.detailsTitle}>Guardian Information</Text>
      <View style={styles.details}>
        <View style={styles.container}>
          <Text style={styles.detailsText}>Name</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.detailsText}>Email</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.detailsText}>Contact Number</Text>
        </View>
        <View style={[styles.container, { borderBottomWidth: 0 }]}>
          <Text style={styles.detailsText}>Gender</Text>
        </View>
      </View>
      <Text style={styles.detailsTitle}>Member Information</Text>
      <View style={[styles.details, styles.memberInfo]}>
        <View style={styles.container}>
          <Text style={styles.detailsText}>Email</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.detailsText}>ID</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.detailsText}>Name</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.detailsText}>Contact Number</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.detailsText}>Gender</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.detailsText}>Address</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.detailsText}>Date of Birth</Text>
        </View>
        <View style={[styles.container, { borderBottomWidth: 0 }]}>
          <Text style={styles.detailsText}>Image</Text>
        </View>
      </View>
      <Text style={styles.detailsTitle}>Membership Information</Text>
      <View style={styles.details}>
        <View style={styles.container}>
          <Text style={styles.detailsText}>Membership plan</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.detailsText}>Monitor trainer name</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.detailsText}>Start Date</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.detailsText}>End Date</Text>
        </View>
        <View style={[styles.container, { borderBottomWidth: 0 }]}>
          <Text style={styles.detailsText}>Actual amount</Text>
        </View>
      </View>
      <Text style={styles.detailsTitle}>Payment</Text>
      <View style={[styles.details, styles.payment]}>
        <View style={styles.container}>
          <Text style={styles.detailsText}>Discount amount</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.detailsText}>To Pay</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.detailsText}>Payment Mode</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.detailsText}>Transaction Date</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.detailsText}>Paying amount</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.detailsText}>Balance amount</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.detailsText}>Balance Date</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.detailsText}>Apply Tax (Yes/No)</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.detailsText}>Inclusive / Exclusive</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.detailsText}>Tax Percentage</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.detailsText}>Total amount</Text>
        </View>
        <View style={[styles.container, { borderBottomWidth: 0 }]}>
          <Text style={styles.detailsText}>Remark</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default MembershipDetailsScreen