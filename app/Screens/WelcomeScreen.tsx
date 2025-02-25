import { Image,ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function WelcomeScreen() {
  return (
    <View style={styles.container} >
        <ImageBackground source={require('../../assets/images/LivingRoom.jpg')}
        style={styles.welcomeBackground}>

            <View style={styles.logoContainer}>
            <Text>Unstuff</Text>

            <Image source={require('../../assets/images/UnStuffLogo.png')}
            style={styles.logo}
            />

            </View>


            <Pressable style={styles.loginButton} onPress={() => console.log('Login pressed')}>
                <Text style={styles.loginText}>Login</Text>
            </Pressable>
            <Pressable style={styles.registerButton} onPress={() => console.log('Sign Up pressed')}>
                <Text style={styles.signUpText}>Sign Up</Text>
            </Pressable>

        </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    welcomeBackground:{
        width:'100%',
        height: '100%',
        justifyContent:'flex-end',
        alignItems:"center"
    },
    loginButton:{
        width:'100%',
        height: 70,
        backgroundColor: '#fc5c65',
        borderRadius: 50,
    },
    registerButton:{
        width:'100%',
        height: 70,
        backgroundColor: '#54a0ff',
        borderRadius: 50,
        margin: 20,
    },
    logo:{
        width:100,
        height: 100,
        position:'absolute',
        top: 5,

    },
    logoContainer:{
        position: 'absolute',
        top: 30,
        alignItems:'center',
    },
    loginText:{
        color:'white',
        fontSize: 30,
        textAlign:'center',
        marginTop: 15,
        fontWeight: 'bold'
    },
    signUpText:{
        color:'white',
        fontSize: 30,
        textAlign:'center',
        marginTop: 15,
        fontWeight: 'bold'
    }
})