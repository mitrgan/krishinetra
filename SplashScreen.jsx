import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native'; 
import { SafeAreaView } from 'react-native-safe-area-context';



// const SplashScreen = ({ navigation }) => {
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       navigation.replace('StartScreen'); // navigate after 5s
//     }, 5000);

//     return () => clearTimeout(timer);
//   }, [navigation]);
// }


const SplashScreen = ({ navigation }) => {
  // Check if navigation object is received
  if (!navigation) {
    console.error("Navigation prop is missing in SplashScreen!");
    return <Text>Loading...</Text>; // Render a fallback UI
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      // Use the correct screen name from App.jsx
      navigation.replace('StartScreen'); 
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigation]);

   return (
    <SafeAreaView style={styles.container}>
      
      < Image  source={require('./assets/image.png')} 

        

      style={styles.img}
      />
    </SafeAreaView>
   );
  
}
export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#E1FCE2',
    
  },
  img: {
    position: 'absolute',
    width: 417,
    height: 417,
    left: 0,
    right: 4,
    top: 210,
  }
  
}
)