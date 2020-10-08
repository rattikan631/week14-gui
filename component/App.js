import React from 'react'
import {View,Text} from 'react-native'

const App=()=>{
  return(
    <View style={{flex:1,margin:20}}>
      <View style={{flex:1,backgroundColor:'#8a2be2'}}>
        <Text style={{color:'red'}}>Hello World</Text>
      </View>
      <View style={{flex:2,backgroundColor:'#228b22'}}></View>
      <View style={{flex:3,backgroundColor:'#5f9ea0'}}></View>
    </View>
  )
}
export default App;