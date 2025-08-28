
import Button from '@/components/app-button/Btn';
import { useThemeColors } from '@/components/context/ThemeContext';
import { router } from 'expo-router';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';



const StartScreen = () => {
  const { colors} = useThemeColors();
    return (
        <View style={[styles.container, {backgroundColor:colors.background}]}>
         <ImageBackground style={styles.background} source={require('../assets/images/strat1.jpg')} resizeMode='cover'>
         <View style={styles.containerContent}><Text style={styles.content}>The Future Looks Bright </Text></View>

        <View style={styles.btnContainer}>
        <Button title="Go Shopping" onpress={()=>router.push('/home')}/>
        </View>
    </ImageBackground>
      
        </View>
    );
};

//  styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
    },
    containerContent:{
        paddingVertical:60,
        paddingHorizontal:30,
        lineHeight:0.10
 
    },
    content:{
        fontSize:87,
        fontWeight:'800',
        color:'#022d0a',
       textAlign:'left',
       lineHeight:85

    },
    background:{
        flex:1,
        justifyContent:'flex-start',
        width:'100%'
    },
    btnContainer:{
        position:'absolute',
        bottom:20,
        padding:20
    }
});

export default StartScreen;
