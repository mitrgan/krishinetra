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
      justifyContent:'center',
      width: 417,
      top:500,
      height: 417,
      left: 0,
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