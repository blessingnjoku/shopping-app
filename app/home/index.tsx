import BottomBar from '@/components/BottomBar'
import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'


const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
   <Text>Welcome to Home!</Text>
   <BottomBar/>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
      },
     
})