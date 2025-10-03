import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const StartScreen = ({navigation}) => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#E1FCE2'}}>
     
     < Image  source={require('./assets/farmer.jpg')} 
      style={[styles.img , { opacity: 0.45} ]}
      />
      <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate('lang')}>
      <Text style ={styles.btntxt}>
        Get Started
      </Text>

    </TouchableOpacity>
     <Text style ={styles.txt}>
      Welcome 
      To              KrishiNetra
     </Text>
    
    </View>
   
  )
}
export default StartScreen

const styles = StyleSheet.create({
  txt: {
    position: 'absolute',
    fontSize: 75,
    fontWeight: 'bold',
    color: '#165138ff',
    textAlign: 'center',
    top: '20%',
    lineGap: 100,
    
  },


  img: {
   
    flex:1,
    
  },
  btn:{
    position:'absolute',
    bottom:200,
    backgroundColor:'#34ab78ff',
    paddingVertical:20,
    paddingHorizontal:70,
    borderRadius:30,
    elevation:8,
    
  },
  btntxt:{
    color:'#fff',
    fontSize:25,
    fontWeight:'bold',
  }
  
})