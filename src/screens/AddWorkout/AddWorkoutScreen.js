import { View, Text, TextInput, ScrollView } from 'react-native'
import React from 'react'
import FocusAwareStatusBar from '../../components/StatusBar/FocusAwareStatusBar'
import { styles } from './AddWorkoutStyle'
import Button from '../../components/Button/Button'

const AddWorkoutScreen = ({navigation}) => {

  const [startTime,setStartTime] = React.useState();
  const [endTime,setEndTime] = React.useState();
  const [totalTime,setTotalTime] = React.useState();
  const [timeError,setTimeError] = React.useState(false);

  const calculateHandle = () => {
    // const start = Number(startTime);
    // const end = Number(endTime)
    const total = ((endTime-startTime)*60)
    // console.log(typeof(total))s
    if(typeof(total) === "number" ){
    setTotalTime(total)
    setTimeError(false)
    }
    else {
      setTimeError(true)
    }
  }

  const saveHandle = () => {
    navigation.navigate('TabWorkout')
  }
  return (
    <View style={styles.mainContainer}>
      <FocusAwareStatusBar isLightBar={false} isTopSpace={true} isTransparent={true}/>
      <View style={styles.topSection}>
        <Text style={styles.title}>Add a Workout</Text>
      </View>
      <ScrollView style={styles.bottomSection}>
        <View style={styles.detailsContainer}>
        <Text style={styles.text}>Enter Start Time</Text>
        <TextInput 
          style={styles.input}
          placeholder="e.g. 07:00"
          placeholderTextColor={"#999"}
          keyboardType="numeric"
          value={startTime}
          onChangeText={(text)=>setStartTime(text)}
        />
        </View>
        <View style={styles.detailsContainer}>
        <Text style={styles.text}>Enter End Time</Text>
        <TextInput 
          style={styles.input}
          placeholder="e.g. 07:00"
          placeholderTextColor={"#999"}
          keyboardType="numeric"
          value={endTime}
          onChangeText={(text)=>setEndTime(text)}
        />
        </View>
        {timeError?<Text style={styles.errorText}>❗Enter valid time</Text>:null}
        <View style={[styles.detailsContainer,{flexDirection:"row"}]}>
        <Text style={styles.text}>Total Time:    {totalTime}</Text>
        <Button title={"Calculate"} buttonStyle={styles.calculateBtnStyle} buttonFunction={calculateHandle}/>
        </View>
        <View style={styles.detailsContainer}>
        <Button  title={"Save"} buttonFunction={saveHandle} buttonStyle={styles.saveBtnContainer}/>
        </View>
      </ScrollView>
    </View>
  )
}

export default AddWorkoutScreen