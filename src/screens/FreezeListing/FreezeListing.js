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
    setFreeze(false)
    setConfirmModalVisible(false)
    // navigation.navigate('TabMyPlan')
    console.log(freeze)
  }
  const unFreezeHandle = () => {
    setConfirmModalVisible(!confirmModalVisible)
    console.log("status: ",freeze)
  }
  const unFreezeYesHandle = () => {
    setFreeze(true)
    setConfirmModalVisible(false)
    // navigation.navigate('TabMyPlan')
    console.log(freeze)
  }
  useEffect(() => {
    console.log("freeze status: ", freeze);
  }, [freeze]);
  return (
    <View style={styles.mainContainer}>
      <FocusAwareStatusBar isLightBar={true} isTopSpace={true} isTransparent={true} />
      <Button title={"Freeze"}  buttonFunction={freezeHandle} buttonStyle={freeze?styles.activeStyle:styles.inactiveStyle}/>
      <Button title={"Unfreeze"} buttonFunction={unFreezeHandle} buttonStyle={freeze?styles.inactiveStyle:styles.activeStyle}/>
      <ConfirmModal modalVisible={confirmModalVisible} toggleModal={freezeHandle} yesHandle={freezeYesHandle}/>
      <ConfirmModal modalVisible={confirmModalVisible} toggleModal={unFreezeHandle} yesHandle={unFreezeYesHandle}/>
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