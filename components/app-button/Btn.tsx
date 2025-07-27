import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'


type btnProps= {
    title:string,
    onpress:()=>void

}
const Button = ({title,onpress}: btnProps)=> {
  return (
    <TouchableOpacity onPress={onpress} style={styles.btn}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    btn:{
       width:400,
       height:65,
       paddingVertical:15,
        backgroundColor:'#0d2300',
        textAlign:'center',
        borderRadius:35,
        display:'flex',
        alignItems:'center'

    
        
    },
    title:{
        color:'#fff',
        fontSize:24
    }
})