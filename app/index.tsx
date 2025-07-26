
import Button from '@/components/app-button/Btn';
import { router } from 'expo-router';
import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';


const StartScreen = () => {

    return (
        <SafeAreaView style={styles.container}>
            <Text>StartScreen</Text>
            <Button title="Go Shopping" onpress={()=>router.push('/home')}/>
        </SafeAreaView>
    );
};

//  styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

export default StartScreen;
