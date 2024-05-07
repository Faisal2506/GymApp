import { View, Text, Modal } from 'react-native'
import React from 'react'
import { styles } from './ConfirmModalStyle'
import Button from '../Button/Button'
import { useTheme } from '../../context/ThemeContext'

const ConfirmModal = ({modalVisible,toggleModal,yesHandle}) => {
  const { theme } = useTheme();
  return (
    <Modal visible={modalVisible} transparent>
      <View style={styles.centerModal}>
        <View style={styles.mainContainer}>
          <Text style={[styles.text, {color: theme.modalText}]}>Enter Freeze Remarks</Text>
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