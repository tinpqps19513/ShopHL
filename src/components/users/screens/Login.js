import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'

import { UserContext } from '../UserContext';

const Login = (props) => {
  const { navigation } = props;
  const { setUser } = useContext(UserContext);
  const getUser = () => {
    const us = { username: "admin", password: "123" }
    setUser(us);
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login</Text>
      <TouchableOpacity onPress={() => getUser()}>
        <Text>GotoHome</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})