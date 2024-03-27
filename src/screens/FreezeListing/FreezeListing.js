import { View, Text } from 'react-native'
import { React,useState,useEffect } from 'react'
import FocusAwareStatusBar from '../../components/StatusBar/FocusAwareStatusBar'
import { styles } from './FreezeListingStyle'
import Button from '../../components/Button/Button'
import ConfirmModal from '../../components/ConfirmModal/ConfirmModal'

const FreezeListing = ({navigation}) => {
  const [confirmModalVisible,setConfirmModalVisible] = useState(false);
  const [freeze,setFreeze] = useState(false);

  const freezeHandle = () => {
    setConfirmModalVisible(!confirmModalVisible)
    console.log("status: ",freeze)
  }
  const freezeYesHandle = () => {
    setFreeze(!freeze)
    setConfirmModalVisible(false)
    console.log(freeze)
  }
  return (
    <View style={styles.mainContainer}>
      <FocusAwareStatusBar isLightBar={true} isTopSpace={true} isTransparent={true} />
      <Button title={"Freeze"}  buttonFunction={freezeHandle} buttonStyle={freeze?styles.activeStyle:styles.inactiveStyle}/>
      <Button title={"Unfreeze"} buttonFunction={freezeHandle} buttonStyle={freeze?styles.inactiveStyle:styles.activeStyle}/>
      <ConfirmModal modalVisible={confirmModalVisible} toggleModal={freezeHandle} yesHandle={freezeYesHandle}/>
      <View>
        <Text style={styles.details}>{freeze}</Text>
        <Text style={styles.details}>ID</Text>
        <Text style={styles.details}>Type</Text>
        <Text style={styles.details}>Date</Text>
        <Text  style={styles.details}>Created Date</Text>
      </View>
    </View>
  )
}

export default FreezeListing