import { View, Text } from 'react-native'
import { React,useState,useEffect } from 'react'
import FocusAwareStatusBar from '../../components/StatusBar/FocusAwareStatusBar'
import { styles } from './FreezeListingStyle'
import Button from '../../components/Button/Button'
import ConfirmModal from '../../components/ConfirmModal/ConfirmModal'
import { useTheme } from '../../context/ThemeContext'

const FreezeListing = ({navigation}) => {
  const { theme, isDarkMode } = useTheme();
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
    <View style={[styles.mainContainer,{backgroundColor: theme.backgroundColor}]}>
      <FocusAwareStatusBar isLightBar={isDarkMode?true:false} isTopSpace={true} isTransparent={true} />
      <Button title={"Freeze"}  buttonFunction={freezeHandle} buttonStyle={freeze?styles.activeStyle:styles.inactiveStyle}/>
      <Button title={"Unfreeze"} buttonFunction={freezeHandle} buttonStyle={freeze?styles.inactiveStyle:styles.activeStyle}/>
      <ConfirmModal modalVisible={confirmModalVisible} toggleModal={freezeHandle} yesHandle={freezeYesHandle}/>
      <View>
        <Text style={[styles.details,{color: theme.greenText}]}>{freeze}</Text>
        <Text style={[styles.details,{color: theme.greenText}]}>ID</Text>
        <Text style={[styles.details,{color: theme.greenText}]}>Type</Text>
        <Text style={[styles.details,{color: theme.greenText}]}>Date</Text>
        <Text style={[styles.details,{color: theme.greenText}]}>Created Date</Text>
      </View>
    </View>
  )
}

export default FreezeListing