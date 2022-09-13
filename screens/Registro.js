import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, TouchableOpacity, View, Text, TextInput, Image } from 'react-native';
import { signUp } from '../app/api';
import logo from '../assets/logo.png';
import globalStyles from '../app/globalStyles';

const Registro  = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [confirm, setConfirm] = useState('');

    return (
        <KeyboardAvoidingView
            behavior="height"
            style={globalStyles.screen}
        >
            <View style={globalStyles.container}>
                <View style={styles.center}>
                <Image source={logo} style={{ width:266 , height: 74 }}  />
                </View>
                <Text style={styles.siempre}>Siempre cerca de ti.</Text>
                
                <TextInput style={styles.input} placeholder='Usuario/Profesional' autoCapitalize="none"  />

                <TextInput style={styles.input} placeholder='Nombre' autoCapitalize="none" onChangeText={text => setName(text)} />

                <TextInput style={styles.input} keyboardType="email-address" placeholder='E-mail' autoCapitalize="none" onChangeText={text => setEmail(text)} />
                
                <TextInput style={styles.input} placeholder='contraseña' secureTextEntry autoCapitalize="none" onChangeText={text => setPassword(text)} />

                

                <TextInput style={styles.input} secureTextEntry placeholder='confirmar contraseña' autoCapitalize="none" onChangeText={text => setConfirm(text)} />
            
            
                
                    <TouchableOpacity onPress={() => signUp(email, password)}>
                        <View style={[globalStyles.btnyellow,styles.prompt]}>
                            <Text style={styles.negrita}>
                                Completar registro
                            </Text>
                        </View>
                    </TouchableOpacity>
                
                
               
            </View>
        </KeyboardAvoidingView>
    )
}

export default Registro; 

const styles = StyleSheet.create({

    center:{
        justifyContet: 'center',
        alignItems: 'center',
        marginTop:55,
    },

    prompt: {
       marginTop:40
    },

    txtcenter:{
        textAlign:'center',
        color:'white',
    },
    
    input: {
        padding: 12,
        fontSize: 16,
        color: '#626262',
        backgroundColor: '#D9D9D9',
        borderRadius:8,
        marginTop:40,
        height:40,
        width:"100%",
    },
    white:{
        color:'white',
        marginBottom:20,
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
        marginBottom:30,
    },
})