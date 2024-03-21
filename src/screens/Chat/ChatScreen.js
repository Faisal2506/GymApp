import { ScrollView, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import FocusAwareStatusBar from '../../components/StatusBar/FocusAwareStatusBar'
import { styles } from './ChatStyle'
import { AntDesign } from '@expo/vector-icons'

const ChatScreen = () => {
  return (
    <ScrollView style={styles.mainContainer}>
      <FocusAwareStatusBar isLightBar={true} isTopSpace={true} isTransparent={true} />
      <TouchableOpacity style={styles.chatTypeCard}>
        <Image source={require('../../../assets/images/Chat/ownerChat.jpg')} style={styles.imageStyle} />
        <Text style={styles.chatTypeTitle}>Individual Chat With Gym Owner{"\n"} On Request</Text>
        <AntDesign
          name='caretright'
          size={20}
          color="#D0FD3E"
        />
      </TouchableOpacity>
      <Text style={styles.trainerCardTitle}>Trainer's List</Text>
      <TouchableOpacity style={styles.chatTypeCard}>
        <Image source={require('../../../assets/images/Chat/personalTrainer01.png')} style={styles.imageStyle} />
        <Text style={styles.chatTypeTitle}>Individual Chat with Personal Trainer{"\n"} On Request</Text>
        <AntDesign
          name='caretright'
          size={20}
          color="#D0FD3E"
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.chatTypeCard}>
        <Image source={require('../../../assets/images/Chat/personalTrainer02.png')} style={styles.imageStyle} />
        <Text style={styles.chatTypeTitle}>Individual Chat with Personal Trainer{"\n"} On Request</Text>
        <AntDesign
          name='caretright'
          size={20}
          color="#D0FD3E"
        />
      </TouchableOpacity>
      <Text style={styles.trainerCardTitle}>Group Chat</Text>
      <TouchableOpacity style={styles.chatTypeCard}>
        <Image source={require('../../../assets/images/Chat/groupChat.png')} style={styles.imageStyle} />
        <Text style={styles.chatTypeTitle}>Individual Chat with Personal Trainer{"\n"} On Request</Text>
        <AntDesign
          name='caretright'
          size={20}
          color="#D0FD3E"
        />
      </TouchableOpacity>
    </ScrollView>
  )
}

export default ChatScreen