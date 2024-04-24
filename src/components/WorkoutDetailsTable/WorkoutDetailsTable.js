import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './WorkoutDetailsTableStyle'
import { DataTable } from 'react-native-paper'
import { useTheme } from '../../context/ThemeContext'

const WorkoutDetailsTable = () => {
  const { theme } = useTheme();
  return (
    <DataTable style={[styles.container,{borderColor: theme.greenText}]}>
      <DataTable.Header style={[styles.tableHeader,{backgroundColor: theme.greenText}]}>
        <DataTable.Title><Text style={styles.title}>Start Time</Text></DataTable.Title>
        <DataTable.Title><Text style={styles.title}>End Time</Text></DataTable.Title>
        <DataTable.Title><Text style={styles.title}> Total Time</Text></DataTable.Title>
        <DataTable.Title><Text style={styles.title}>Result</Text></DataTable.Title>
        <DataTable.Title><Text style={styles.title}>Created On</Text></DataTable.Title>
      </DataTable.Header>
      <DataTable.Row>
        <DataTable.Cell><Text style={[styles.text,{color: theme.textColor}]}>07:00</Text></DataTable.Cell>
        <DataTable.Cell><Text style={[styles.text,{color: theme.textColor}]}>08:00</Text></DataTable.Cell>
        <DataTable.Cell><Text style={[styles.text,{color: theme.textColor}]}>60</Text></DataTable.Cell>
        <DataTable.Cell><Text style={[styles.text,{color: theme.textColor}]}>Good</Text></DataTable.Cell>
        <DataTable.Cell><Text style={[styles.text,{color: theme.textColor}]}>12-03-24</Text></DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell><Text style={[styles.text,{color: theme.textColor}]}>07:00</Text></DataTable.Cell>
        <DataTable.Cell><Text style={[styles.text,{color: theme.textColor}]}>08:00</Text></DataTable.Cell>
        <DataTable.Cell><Text style={[styles.text,{color: theme.textColor}]}>60</Text></DataTable.Cell>
        <DataTable.Cell><Text style={[styles.text,{color: theme.textColor}]}>Good</Text></DataTable.Cell>
        <DataTable.Cell><Text style={[styles.text,{color: theme.textColor}]}>13-03-24</Text></DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell><Text style={[styles.text,{color: theme.textColor}]}>07:00</Text></DataTable.Cell>
        <DataTable.Cell><Text style={[styles.text,{color: theme.textColor}]}>08:00</Text></DataTable.Cell>
        <DataTable.Cell><Text style={[styles.text,{color: theme.textColor}]}>60</Text></DataTable.Cell>
        <DataTable.Cell><Text style={[styles.text,{color: theme.textColor}]}>Good</Text></DataTable.Cell>
        <DataTable.Cell><Text style={[styles.text,{color: theme.textColor}]}>14-03-24</Text></DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  )
}

export default WorkoutDetailsTable