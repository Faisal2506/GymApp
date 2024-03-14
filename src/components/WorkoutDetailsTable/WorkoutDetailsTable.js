import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './WorkoutDetailsTableStyle'
import { DataTable } from 'react-native-paper'

const WorkoutDetailsTable = () => {
  return (
    <DataTable style={styles.container}>
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title><Text style={styles.title}>Start Time</Text></DataTable.Title>
        <DataTable.Title><Text style={styles.title}>End Time</Text></DataTable.Title>
        <DataTable.Title><Text style={styles.title}> Total Time</Text></DataTable.Title>
        <DataTable.Title><Text style={styles.title}>Result</Text></DataTable.Title>
        <DataTable.Title><Text style={styles.title}>Created On</Text></DataTable.Title>
      </DataTable.Header>
      <DataTable.Row>
        <DataTable.Cell><Text style={styles.text}>07:00</Text></DataTable.Cell>
        <DataTable.Cell><Text style={styles.text}>08:00</Text></DataTable.Cell>
        <DataTable.Cell><Text style={styles.text}>60</Text></DataTable.Cell>
        <DataTable.Cell><Text style={styles.text}>Good</Text></DataTable.Cell>
        <DataTable.Cell><Text style={styles.text}>12-03-24</Text></DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell><Text style={styles.text}>07:00</Text></DataTable.Cell>
        <DataTable.Cell><Text style={styles.text}>08:00</Text></DataTable.Cell>
        <DataTable.Cell><Text style={styles.text}>60</Text></DataTable.Cell>
        <DataTable.Cell><Text style={styles.text}>Good</Text></DataTable.Cell>
        <DataTable.Cell><Text style={styles.text}>13-03-24</Text></DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell><Text style={styles.text}>07:00</Text></DataTable.Cell>
        <DataTable.Cell><Text style={styles.text}>08:00</Text></DataTable.Cell>
        <DataTable.Cell><Text style={styles.text}>60</Text></DataTable.Cell>
        <DataTable.Cell><Text style={styles.text}>Good</Text></DataTable.Cell>
        <DataTable.Cell><Text style={styles.text}>14-03-24</Text></DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  )
}

export default WorkoutDetailsTable