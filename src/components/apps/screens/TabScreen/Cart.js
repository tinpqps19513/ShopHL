import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Cart = (props) => {
  const { navigation } = props;
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text>Cart</Text>
      <TouchableOpacity onPress={()=>navigation.navigate("CheckOut")}>
        <Text>Go to CheckOut</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({})