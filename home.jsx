


import { StyleSheet, Text, View,Image ,Pressable , FlatList, TouchableOpacity} from 'react-native'

const dummy = [
  {id:1, title:'Yield Production', image:require('./assets/image3.png')},
  {id:2, title:'Recommendation', image:require('./assets/image10.png')},
  {id:3, title:'Disease Detection', image:require('./assets/image7.png')},
  {id:4, title:'Profit Analysis', image:require('./assets/image6.png')},
  {id:5, title:'Crop Timeline', image:require('./assets/image9.png')},
  {id:6, title:'Soil Analysis', image:require('./assets/image8.png')},
]
const App = () => {
  return (
    
    <View style ={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require('./assets/menu.png')} style={styles.headerIcon} />
        </TouchableOpacity>
        <Image source={require('./assets/head.png')} style={{height:18,width:180}} />
        <TouchableOpacity>
          <Image source={require('./assets/bell.png')} style={styles.headerIcon} />
        </TouchableOpacity>
      </View>



    
      <FlatList
        data={dummy}
        renderItem={({ item }) => (
          <Pressable style={({ pressed }) => [
            styles.card,
            pressed && { transform: [{ scale: 1.1 }] } // enlarge while pressing
          ]}>

            <Image source={item.image}
              style={{top:5, width: 110, height: 100, borderRadius: 50, }} />
              <Text style={styles.txt}>{item.title}</Text>
          </Pressable>
          
        ) }
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={{ height: 50 }} />}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-evenly' }}
      />

     
      
</View>
      
       
  )
}

export default App


const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'#33ca95ff',
   
    paddingHorizontal:20,
   },
   card:{
    height:155,
    width:152,
    backgroundColor:'#ffffff',
    borderRadius:20,
    alignItems:'center',
    borderWidth:3,
    
    borderColor:'#69867aff',
    justifyContent:'center',
   },
  
    txt: {
    marginTop:8,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0d4b30ff',
    textAlign: 'center',
    
    },
    header: {
    
    flexDirection: 'row',
    justifyContent: 'space-between',
    
    alignItems: 'center',
    padding: 16,
    marginTop:35 ,
    marginBottom:10,
    },
    headerIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',

    }




}
)
