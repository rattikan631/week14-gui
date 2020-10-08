import React from 'react'
import {View,Text}from'react-native'

const App=()=>{
  return(
    <View style={{flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'stretch',
    }}>
      <View style={{width:50,height:50,backgroundColor:'#ffb6c1'}}></View>
      <View style={{width:50,height:50,backgroundColor:'#ffa07a'}}></View>
     <View style={{width:50,height:50,backgroundColor:'#20b2aa'}}></View>
    </View>
  )
}
export default App;