import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, TouchableOpacity, View, Text, TextInput, Image, ScrollView} from 'react-native';
import logo from '../assets/logo.png';
import Login from './Login';
import globalStyles from '../app/globalStyles';



export default({navigation, route})=>
    
        <KeyboardAvoidingView
            behavior="height"
            style={globalStyles.screen}
        >
            <View style={globalStyles.container}>
                <View style={styles.center } >
                <Image source={logo} style={{ width:266 , height: 74 }} resizeMode={'center'} />
                </View>
                <Text style={styles.siempre}>Siempre cerca de ti.</Text>

                <Text style={styles.bienvenido}>¡Te damos la bienvenida!</Text>
                
                
                    <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                        
                        <View style={[globalStyles.btnyellow, styles.margin]}>
                            <Text style={styles.negrita}>
                                Iniciar sessión
                            </Text>
                        </View>
                        
                    </TouchableOpacity>
                
                
                
                    <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
                        <View style={[globalStyles.btnyellow,styles.margin]}>
                            <Text style={styles.negrita}>
                                Registrarse
                            </Text>
                        </View>
                    </TouchableOpacity>
                
                <View style={styles.politica}><TouchableOpacity ><Text style={styles.politi}>Politíca de privacidad</Text></TouchableOpacity></View>
            
            </View>
            
        </KeyboardAvoidingView>
    



const styles = StyleSheet.create({
    
    bienvenido:{
        color:'#041E42',
        textAlign:'center',
        fontSize:24,
        marginTop:53,
        marginBottom:48,
        fontWeight:'bold',
    },
    
    center:{
        justifyContet: 'center',
        alignItems: 'center',
        marginTop:55,
        
    },
    margin:{
        marginBottom:40
    },
    promptMessage: {
        fontSize: 16,
        color: '#333'
    },

    negrita:{
        fontWeight:'bold',
        textAlign:'center',
    },
    siempre:{
        color:'#041E42',
        textAlign:'center',
        fontSize:23,
        marginTop:48,
    },
    politica:{
        alignItems:"center",
        position:"absolute",
        bottom:10,
        left:0,
        right:0,
        textAlign:'center',
        width: '100%',
        bottom:20,
    },
    politi:{
        color:'#041E42',
        
    },
})