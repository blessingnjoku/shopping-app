import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'


type btnProps= {
    title:string,
    onpress:()=>void

}
const Button = ({title,onpress}: btnProps)=> {
  return (
    <TouchableOpacity onPress={onpress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({})