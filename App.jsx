

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import StartScreen from './src/screens/StartScreen.jsx';
// import SplashScreen from './src/screens/SplashScreen.jsx';

// const Stack = createNativeStackNavigator();

// function App() {
//   const [showSplashScreen, setShowSplashScreen] = React.useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowSplashScreen(false);
//     }, 5000); 
//   },[]);// hide splash screen after 5 seconds
//   return (
//     <NavigationContainer>
//       <Stack.Navigator >
//          {showSplashScreen ? 
//             <Stack.Screen
//               name="SplashScreen"
//               component={SplashScreen}
//               options={{ headerShown: false }}
//             />
//               : null}
  
//         <Stack.Screen
//           name="StartScreen"
//           component={StartScreen}
//           options={{ headerShown: false }}
//         />
//         </Stack.Navigator>
//     </NavigationContainer>
//   );
// }


// export default App;





import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SplashScreen from './src/screens/SplashScreen' // <-- Added Splash Screen
import StartScreen from './src/screens/StartScreen'
import lang from './src/screens/lang'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

const stack= createNativeStackNavigator();

const StackNavigator = () => {
  return(
    <stack.Navigator    
      initialRouteName="SplashScreen" 
      screenOptions={{ headerShown: false }} >
        <stack.Screen name="SplashScreen" component={SplashScreen}/> 
        <stack.Screen name="StartScreen" component={StartScreen}/>
        <stack.Screen name="lang" component={lang}/>
        
    </stack.Navigator>
    )
 }


const App = () => {
  return (
    <NavigationContainer >
        <StackNavigator/>
      
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})




import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const StartScreen = () => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#E1FCE2'}}>
     
     < Image  source={require('./assets/farmer.jpg')} 
      style={[styles.img , { opacity: 0.45} ]}
      />
      <TouchableOpacity style={styles.btn} >
      <Text style ={styles.btntxt}>
        Get Started
      </Text>
      {/* onPress={()=> navigation.navigate('lang')} */}

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





import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
 
  TouchableOpacity,
  
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const languages = ['ENGLISH', 'HINDI', 'PUNJABI', 'MALAYALAM', 'BENGALI', 'KANNADA'];

const lang = () => {
  const handleLanguageSelect = (lang) => {
    console.log(`Selected language: ${lang}`);
    // You can add navigation logic here, e.g., to the next screen.
  };

  return (

      <SafeAreaView style={styles.container}>
        
        <TouchableOpacity style={styles.backButton}>
          {/* //replace this with an icon from a library like react-native-vector-icons */}
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>

        <View style={styles.cardContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.languageText}>  Select your language</Text>
          </View>
          
          <View style={styles.buttonList}>
            {languages.map((lang) => (
              <TouchableOpacity
                key={lang}
                style={styles.button}
                onPress={() => handleLanguageSelect(lang)}
              >
                <Text style={styles.buttonText}>{lang}</Text>
              </TouchableOpacity>
            ))}
            <Image style={styles.img} source={require('./assets/img.png')} />
          </View>
        </View>
      </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
    img: {
      position: 'absolute',
      
      width: 420,
      top:460,
      height:150,
      alignSelf:'center',
      
    },

  
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#053C35',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: 'rgba(245, 237, 237, 0.93)',
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 24,
    color: '#000',
  },
  cardContainer: {
    width: '80%',
    top:80,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 8,
  },
  inputContainer: {
    width: '100%',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  languageText: {
    fontSize: 20,
    alignItems: 'center',
    color: '#2c6126ff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonList: {
    width: '100%',
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 15,
    marginVertical: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default lang;



// import React, { useEffect } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   Pressable, FlatList, TouchableOpacity ,
//   TextInput
  
// } from 'react-native';

// import { SafeAreaView } from 'react-native-safe-area-context';  

// const App = () => {
 
//   const [userName, setUserName] = React.useState('')
//   const [lastName, setLastName] = React.useState('')
  
//   const [phoneNumber, setPhoneNumber] = React.useState('')
//   const [address, setAddress] = React.useState('')  
//   const [pincode, setPincode] = React.useState('')

//   const [state, setState] = React.useState('')
  
//   return (
//     <SafeAreaView style={{flex:1,justifyContent: 'center', alignItems: 'center',backgroundColor:'#E1FCE2'}}>
//       < Image  source={require('./assets/farmer.jpg')} 
//       style={styles.img }/>
      
     
//      <View style= {styles.box}>
//         <Text style= {styles.boxtxt}>Add Your Details Here</Text>
//         <View style= {styles.box2}>
          
//           <Text style={styles.instxt}>Name*</Text>
//           <TextInput 
//             style={styles.input}
//             placeholder="Enter Your First Name"
//             placeholderTextColor="#444a44ff"
//             value={userName}
//             onChangeText={(item)=>setUserName(item)}
//           />
        
        
//           <Text style={styles.instxt}>Last Name*</Text>
//           <TextInput 
//             style={styles.input}
//             placeholder="Enter Your Last Name"
//             placeholderTextColor="#444a44ff"
//             value={lastName}
//             onChangeText={(item)=>setlastName(item)}
//           />
        
      
//           <Text style={styles.instxt}>Phone Number*</Text>
//           <TextInput 
//             style={styles.input}
//             placeholder="Enter Your Phone Number"
//             placeholderTextColor="#444a44ff"
//             value={phoneNumber}
//             onChangeText={(item)=>setPhoneNumber(item)}
//           />
//           <Text style={styles.instxt}>Address*</Text>
//           <TextInput 
//             style={styles.input}
//             placeholder="Enter Your Address"
//             placeholderTextColor="#444a44ff"
//             value={address}
//             onChangeText={(item)=>setAddress(item)}
//           />
//           <Text style={styles.instxt}>Pincode*</Text>
//           <TextInput 
//             style={styles.input}
//             placeholder="Enter Your Pincode"
//             placeholderTextColor="#444a44ff"
//             value={pincode}
//             onChangeText={(item)=>setPincode(item)}
//           />
//           <Text style={styles.instxt}>State*</Text>
//           <TextInput 
//             style={styles.input}
//             placeholder="Enter Your State"
//             placeholderTextColor="#444a44ff"
//             value={state}
//             onChangeText={(item)=>setState(item)}
//           />
          
          

//       </View>
//       </View>
      
      

//     </SafeAreaView>
//   );
// };
// export default App;

// const styles = StyleSheet.create({
//   img: {
//     flex: 1,
//     position: 'absolute',
//     bottom:0,
//   },
//   box: {
    
//     height:650,
//     width:330,
//     backgroundColor:'#4ca360ff',
//     bottom:10,
   
//     borderRadius:30,
//     left:0,
//   },
//   boxtxt:{
//     fontSize:27,
//     fontWeight:'bold',
//     color:'#fff',
//     textAlign:'center',
//     marginTop:40,

//   },
//   box2: {
//     height:510,
//     width:310,
//     backgroundColor:'#d0e6d5ff',
//     marginTop:30,
//     left:10,
//     borderRadius:30,
    
//   },
//   instxt:{
//     fontSize:15,
//     fontWeight:'bold',
//     color:'#010303ff',
//     marginTop:12,
//     marginBottom:3,
//     marginLeft:20,
//   },
//   input: {
//     left:5,
//     width: 300,
//     backgroundColor: '#fff3f3ff',
//     borderWidth: 2,
//     borderColor: '#07610cff',
//     paddingHorizontal: 8,
//     paddingVertical: 8,
//     borderRadius: 10,
//     fontSize: 18,
//   },
// });




// import { StyleSheet, Text, View,Image ,Pressable , FlatList, TouchableOpacity} from 'react-native'

// const dummy = [
//   {id:1, title:'Yield Production', image:require('./assets/image3.png')},
//   {id:2, title:'Recommendation', image:require('./assets/image10.png')},
//   {id:3, title:'Disease Detection', image:require('./assets/image7.png')},
//   {id:4, title:'Profit Analysis', image:require('./assets/image6.png')},
//   {id:5, title:'Crop Timeline', image:require('./assets/image9.png')},
//   {id:6, title:'Soil Analysis', image:require('./assets/image8.png')},
// ]
// const App = () => {
//   return (
    
//     <View style ={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity>
//           <Image source={require('./assets/menu.png')} style={styles.headerIcon} />
//         </TouchableOpacity>
//         <Image source={require('./assets/head.png')} style={{height:18,width:180}} />
//         <TouchableOpacity>
//           <Image source={require('./assets/bell.png')} style={styles.headerIcon} />
//         </TouchableOpacity>
//       </View>



    
//       <FlatList
//         data={dummy}
//         renderItem={({ item }) => (
//           <Pressable style={({ pressed }) => [
//             styles.card,
//             pressed && { transform: [{ scale: 1.1 }] } // enlarge while pressing
//           ]}>

//             <Image source={item.image}
//               style={{top:5, width: 110, height: 100, borderRadius: 50, }} />
//               <Text style={styles.txt}>{item.title}</Text>
//           </Pressable>
          
//         ) }
//         keyExtractor={(item) => item.id.toString()}
//         ItemSeparatorComponent={() => <View style={{ height: 50 }} />}
//         numColumns={2}
//         columnWrapperStyle={{ justifyContent: 'space-evenly' }}
//       />

     
      
// </View>
      
       
//   )
// }

// export default App


// const styles = StyleSheet.create({

//   container:{
//     flex:1,
//     backgroundColor:'#33ca95ff',
   
//     paddingHorizontal:20,
//    },
//    card:{
//     height:155,
//     width:152,
//     backgroundColor:'#ffffff',
//     borderRadius:20,
//     alignItems:'center',
//     borderWidth:3,
    
//     borderColor:'#69867aff',
//     justifyContent:'center',
//    },
  
//     txt: {
//     marginTop:8,
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#0d4b30ff',
//     textAlign: 'center',
    
//     },
//     header: {
    
//     flexDirection: 'row',
//     justifyContent: 'space-between',
    
//     alignItems: 'center',
//     padding: 16,
//     marginTop:35 ,
//     marginBottom:10,
//     },
//     headerIcon: {
//     width: 40,
//     height: 40,
//     resizeMode: 'contain',

//     }




// }
// )
//onPress={()=> navigation.navigate('lang')}


// import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
// import React from 'react'

// const StartScreen = ({}) => {
//   return (
//     <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#E1FCE2'}}>
     
//      < Image  source={require('./assets/farmer.jpg')} 
//       style={[styles.img , { opacity: 0.45} ]}
//       />
//       <TouchableOpacity style={styles.btn} >
//       <Text style ={styles.btntxt}>
//         Get Started
//       </Text>

//     </TouchableOpacity>
//      <Text style ={styles.txt}>
//       Welcome 
//       To              KrishiNetra
//      </Text>
    
//     </View>
   
//   )
// }
// export default StartScreen

// const styles = StyleSheet.create({
//   txt: {
//     position: 'absolute',
//     fontSize: 75,
//     fontWeight: 'bold',
//     color: '#165138ff',
//     textAlign: 'center',
//     top: '20%',
//     lineGap: 100,
    
//   },


//   img: {
   
//     flex:1,
    
//   },
//   btn:{
//     position:'absolute',
//     bottom:200,
//     backgroundColor:'#34ab78ff',
//     paddingVertical:20,
//     paddingHorizontal:70,
//     borderRadius:30,
//     elevation:8,
    
//   },
//   btntxt:{
//     color:'#fff',
//     fontSize:25,
//     fontWeight:'bold',
//   }
  
// })