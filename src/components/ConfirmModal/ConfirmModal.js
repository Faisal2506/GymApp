import { View, Text, Modal } from 'react-native'
import React from 'react'
import { styles } from './ConfirmModalStyle'
import Button from '../Button/Button'

const ConfirmModal = ({modalVisible,toggleModal,yesHandle}) => {
  return (
    <Modal visible={modalVisible} transparent>
      <View style={styles.centerModal}>
        <View style={styles.mainContainer}>
          <Text style={styles.text}>Enter Freeze Remarks</Text>
          <View style={styles.buttonContainer}>
          <Button title={"Yes"} buttonFunction={yesHandle}/>
          <Button title={"No"} buttonFunction={toggleModal}/>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default ConfirmModal