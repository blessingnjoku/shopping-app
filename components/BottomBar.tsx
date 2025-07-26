import { Ionicons } from "@expo/vector-icons"
import { router } from "expo-router"
import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
const BottomBar = () => {
  return (
    <View style={styles.container}>
    <TouchableOpacity>
        <Ionicons name='grid-outline' size={34} color='black'/>
     </TouchableOpacity>
     <Image source={require('../assets/images/logo.png')} style={styles.img}  />

     <TouchableOpacity>
        <Ionicons name='cart-outline' size={34} color='black' onPress={()=>router.push('/cart')}/>
     </TouchableOpacity>
    </View>
  )
}

export default BottomBar

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        bottom:0,
        left:0,
        right:0,
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20,
        alignItems:'center'

    },
    img:{
        width:100,
        height:100

    }
})