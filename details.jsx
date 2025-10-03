
import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable, FlatList, TouchableOpacity ,
  TextInput
  
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';  

const App = () => {
 
  const [userName, setUserName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  
  const [phoneNumber, setPhoneNumber] = React.useState('')
  const [address, setAddress] = React.useState('')  
  const [pincode, setPincode] = React.useState('')

  const [state, setState] = React.useState('')
  
  return (
    <SafeAreaView style={{flex:1,justifyContent: 'center', alignItems: 'center',backgroundColor:'#E1FCE2'}}>
      < Image  source={require('../../assets/farmer.jpg')} 
      style={styles.img }/>
      
     
     <View style= {styles.box}>
        <Text style= {styles.boxtxt}>Add Your Details Here</Text>
        <View style= {styles.box2}>
          
          <Text style={styles.instxt}>Name*</Text>
          <TextInput 
            style={styles.input}
            placeholder="Enter Your First Name"
            placeholderTextColor="#444a44ff"
            value={userName}
            onChangeText={(item)=>setUserName(item)}
          />
        
        
          <Text style={styles.instxt}>Last Name*</Text>
          <TextInput 
            style={styles.input}
            placeholder="Enter Your Last Name"
            placeholderTextColor="#444a44ff"
            value={lastName}
            onChangeText={(item)=>setlastName(item)}
          />
        
      
          <Text style={styles.instxt}>Phone Number*</Text>
          <TextInput 
            style={styles.input}
            placeholder="Enter Your Phone Number"
            placeholderTextColor="#444a44ff"
            value={phoneNumber}
            onChangeText={(item)=>setPhoneNumber(item)}
          />
          <Text style={styles.instxt}>Address*</Text>
          <TextInput 
            style={styles.input}
            placeholder="Enter Your Address"
            placeholderTextColor="#444a44ff"
            value={address}
            onChangeText={(item)=>setAddress(item)}
          />
          <Text style={styles.instxt}>Pincode*</Text>
          <TextInput 
            style={styles.input}
            placeholder="Enter Your Pincode"
            placeholderTextColor="#444a44ff"
            value={pincode}
            onChangeText={(item)=>setPincode(item)}
          />
          <Text style={styles.instxt}>State*</Text>
          <TextInput 
            style={styles.input}
            placeholder="Enter Your State"
            placeholderTextColor="#444a44ff"
            value={state}
            onChangeText={(item)=>setState(item)}
          />
          
          

      </View>
      </View>
      
      

    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  img: {
    flex: 1,
    position: 'absolute',
    bottom:0,
  },
  box: {
    
    height:650,
    width:330,
    backgroundColor:'#4ca360ff',
    bottom:10,
   
    borderRadius:30,
    left:0,
  },
  boxtxt:{
    fontSize:27,
    fontWeight:'bold',
    color:'#fff',
    textAlign:'center',
    marginTop:40,

  },
  box2: {
    height:510,
    width:310,
    backgroundColor:'#d0e6d5ff',
    marginTop:30,
    left:10,
    borderRadius:30,
    
  },
  instxt:{
    fontSize:15,
    fontWeight:'bold',
    color:'#010303ff',
    marginTop:12,
    marginBottom:3,
    marginLeft:20,
  },
  input: {
    left:5,
    width: 300,
    backgroundColor: '#fff3f3ff',
    borderWidth: 2,
    borderColor: '#07610cff',
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 10,
    fontSize: 18,
  },
});