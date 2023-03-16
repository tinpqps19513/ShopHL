import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CheckOut = (props) => {
  const { navigation } = props;
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text>CheckOut</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Success")}>
        <Text>
          go to Success
        </Text>

      </TouchableOpacity>
    </View>
  )
}

export default CheckOut

const styles = StyleSheet.create({})