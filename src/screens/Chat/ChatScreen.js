import { ScrollView, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import FocusAwareStatusBar from '../../components/StatusBar/FocusAwareStatusBar'
import { styles } from './ChatStyle'
import { AntDesign } from '@expo/vector-icons'
import { useTheme } from '../../context/ThemeContext'

const ChatScreen = () => {
  const { theme, isDarkMode } = useTheme();
  return (
    <ScrollView style={[styles.mainContainer,{backgroundColor: theme.backgroundColor}]}>
      <FocusAwareStatusBar isLightBar={isDarkMode?true:false} isTopSpace={true} isTransparent={true} />
      <TouchableOpacity style={styles.chatTypeCard}>
        <Image source={require('../../../assets/images/Chat/ownerChat.jpg')} style={styles.imageStyle} />
        <Text style={styles.chatTypeTitle}>Individual Chat With Gym Owner{"\n"} On Request</Text>
        <AntDesign
          name='caretright'
          size={20}
          color="#D0FD3E"
        />
      </TouchableOpacity>
      <Text style={[styles.trainerCardTitle,{color: theme.greenText}]}>Trainer's List</Text>
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
      <Text style={[styles.trainerCardTitle,{color: theme.greenText}]}>Group Chat</Text>
      <TouchableOpacity style={styles.chatTypeCard}>
        <Image source={require('../../../assets/images/Chat/groupChat.png')} style={styles.imageStyle} />
        <Text style={styles.chatTypeTitle}>Group Chat</Text>
        <AntDesign
          name='caretright'
          size={20}
          color="#D0FD3E"
        />
      </TouchableOpacity>
    </ScrollView>
  //   <View>
  //   <View style={[styles.chatTypeCard,styles.row]}>
  //     {/* <View style={styles.imageContainer}>
  //     <Image source={require('../../../assets/images/Chat/ownerChat.jpg')} style={styles.imageBackground} imageStyle={{borderRadius:20}}/>
  //     </View> */}
  //     <ImageBackground source={require('../../../assets/images/Chat/ownerChat.jpg')} style={styles.imageBackground} imageStyle={{borderRadius:20}}>
  //   <TouchableOpacity>
  //     <Text style={styles.chatTypeTitle}>Individual Chat With Gym Owner{"\n"}On Request</Text>
  //     </TouchableOpacity>
  //     </ImageBackground>
  //   </View>
  //   <Text style={styles.trainerCardTitle}>Trainer List : </Text>
  //   <View style={styles.chatTypeCard}>
  //   <ImageBackground source={require('../../../assets/images/Chat/trainerChat.jpg')} style={styles.imageBackground} imageStyle={{borderRadius:20}}>
  //     <View style={{flex: 1,justifyContent:"space-around"}}>
  //     <TouchableOpacity>
  //     <Text style={styles.chatTypeOwner}>Individual Chat With Gym Owner On Request</Text>
  //     </TouchableOpacity>
  //     <TouchableOpacity>
  //     <Text style={styles.chatTypeOwner}>Individual Chat With Gym Owner On Request</Text>
  //     </TouchableOpacity>
  //     </View>
  //     </ImageBackground>
  //   </View>
  //   <View style={styles.chatTypeCard}>
  //   <ImageBackground source={require('../../../assets/images/Chat/groupChat.png')} style={styles.imageBackground} imageStyle={{borderRadius:20}}>
  //   <TouchableOpacity>
  //     <Text style={styles.chatTypeTitle}>Group Chat</Text>
  //     </TouchableOpacity>
  //     </ImageBackground>
  //   </View>
  // </View>
  )
}

export default ChatScreen