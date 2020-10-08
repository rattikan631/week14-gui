import React from 'react'
import {View,Text,Image}from'react-native'

const App=()=>{
  return(
    <View>
      <Image
        style={{widht:'100%',height:100}}
        source={require('./images/cat.jpg')}
        />
        <Image
        style={{width:'100%',height:350}}
        source={{uri:'https://i0.wp.com/www.nextsteptv.com/wp-content/uploads/2018/04/FT-cat.jpg?resize=348%2C215'}}
        />

      </View>
  )
}
export default App;