import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native'
import React from 'react'
import FocusAwareStatusBar from '../../components/StatusBar/FocusAwareStatusBar'
import { styles } from './ChatStyle'

const ChatScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <FocusAwareStatusBar isLightBar={true} isTopSpace={true} isTransparent={true} />
      <View>
        <View style={[styles.chatTypeCard,styles.row]}>
          {/* <View style={styles.imageContainer}>
          <Image source={require('../../../assets/images/Chat/ownerChat.jpg')} style={styles.imageBackground} imageStyle={{borderRadius:20}}/>
          </View> */}
          <ImageBackground source={require('../../../assets/images/Chat/ownerChat.jpg')} style={styles.imageBackground} imageStyle={{borderRadius:20}}>
        <TouchableOpacity>
          <Text style={styles.chatTypeTitle}>Individual Chat With Gym Owner{"\n"}On Request</Text>
          </TouchableOpacity>
          </ImageBackground>
        </View>
        <Text style={styles.trainerCardTitle}>Trainer List : </Text>
        <View style={styles.chatTypeCard}>
        <ImageBackground source={require('../../../assets/images/Chat/trainerChat.jpg')} style={styles.imageBackground} imageStyle={{borderRadius:20}}>
          <View style={{flex: 1,justifyContent:"space-around"}}>
          <TouchableOpacity>
          <Text style={styles.chatTypeOwner}>Individual Chat With Gym Owner On Request</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Text style={styles.chatTypeOwner}>Individual Chat With Gym Owner On Request</Text>
          </TouchableOpacity>
          </View>
          </ImageBackground>
        </View>
        <View style={styles.chatTypeCard}>
        <ImageBackground source={require('../../../assets/images/Chat/groupChat.png')} style={styles.imageBackground} imageStyle={{borderRadius:20}}>
        <TouchableOpacity>
          <Text style={styles.chatTypeTitle}>Group Chat</Text>
          </TouchableOpacity>
          </ImageBackground>
        </View>
      </View>
    </View>
  )
}

export default ChatScreen