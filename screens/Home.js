import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, TouchableOpacity, View, Text, TextInput, Image ,TouchableHighlight} from 'react-native';
import globalStyles from '../app/globalStyles';
import { logout } from '../app/api';
import logo from '../assets/logo.png'
import busca from '../assets/busca.png'
import gota from '../assets/gota.png'
import llama from '../assets/llama.png'
import x1 from '../assets/x1.png'
import x2 from '../assets/x2.png'
import x3 from '../assets/x3.png'
import Group from '../assets/Group.png'


const Home=({navigation, route})=>{
    return(
        <KeyboardAvoidingView
            behavior="height"
            style={globalStyles.screen}
        >
        <View style={globalStyles.container}>
            <View style={styles.center}>
            <Image source={logo} style={{ width:266 , height: 74 }}  />
            </View>
            
                <View style={styles.searchContainer}>
                    <Image source={busca} style={{width:24, height:24}}></Image>
                        <TextInput underlineColorAndroid="transparent" style={{marginLeft:10, width:'85%',height:'80%'}}></TextInput>     
                </View>
                <View style={styles.flexbox}>
                    <View style={styles.profesional}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Six', { screen: 'Fontaneria' })}>
                        <View style={styles.prof}>
                            <Text>Fontanería</Text>
                            <Image source={gota} style={{ width:35 , height: 60  ,marginTop:10}}  ></Image>
                        </View>
                    </TouchableOpacity>
                    </View>
                    
                    <View style={styles.profesional}>
                        <View style={styles.prof}>
                            <Text>Lampistería</Text>
                            <Image source={x3} style={{ width:30.68 , height: 60  ,marginTop:10}}  ></Image>
                        </View>
                    </View>

                    <View style={styles.profesional}>
                        <View style={styles.prof}>
                            <Text>Cerrajería</Text>
                            <Image source={x2} style={{ width:60 , height: 60  ,marginTop:10}}  ></Image>
                        </View>
                    </View>

                    <View style={styles.profesional}>
                        <View style={styles.prof}>
                            <Text>Cristalería</Text>
                            <Image source={x1} style={{ width:60 , height: 60  ,marginTop:10}}  ></Image>
                        </View>
                    </View>

                    <View style={styles.profesional}>
                        <View style={styles.prof}>
                            <Text>Informática</Text>
                            <Image source={Group} style={{ width:60 , height: 60  ,marginTop:10}}  ></Image>
                        </View>
                    </View>

                    <View style={styles.profesional}>
                        <View style={styles.prof}>
                            <Text>Calderas</Text>
                            <Image source={llama} style={{ width:41.25 , height: 60  ,marginTop:10}}  ></Image>
                        </View>
                    </View>
                   
                </View>
                
            
            <TouchableOpacity onPress={()=>logout()}>
                <Text>out</Text>
            </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
    )
}
export default Home;

const styles = StyleSheet.create({

 
    center:{
        justifyContet: 'center',
        alignItems: 'center',
        marginTop:55,
        
    },

    
    prompt: {
        alignItems: 'center',
        marginTop:80,
    },

    txtcenter:{
        textAlign:'center',
        color:'white',
    },
    
    input: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        padding: 12,
        marginVertical: 12,
        fontSize: 16,
        color: '#333',
        backgroundColor: '#eee',
        width: '100%',
        borderRadius:50,
        marginTop:40,
    },
    white:{
        color:'white',
        marginBottom:20,
    },
    
    negrita:{
        fontWeight:'bold'
    },
    searchContainer :{
        height:48,
        borderRadius:6,
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:10,
        backgroundColor:'#D9D9D9',
        marginTop:40,
        marginBottom:40,
    },
    profesional:{
        width:'45%',
        height:120,
        marginBottom:20,
        alignItems:"center",
        
        borderRadius:6,
        shadowColor:"#000",
        shadowOffset:{width:0, height:3},
        shadowOpacity: 0.27,
        shadowRadius: 4.30,
        elevation: 3,

    },
    flexbox:{
        display:'flex',
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"space-around"
    },
    prof:{
        padding:10,
        alignItems:"center",
    }
   
})