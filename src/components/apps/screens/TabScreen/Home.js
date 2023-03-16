import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Home = (props) => {
  const { navigation } = props;
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text>Home</Text>
      <TouchableOpacity onPress={()=>navigation.navigate("ProductDetail")}>
        <Text>
          Sang product detail
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})