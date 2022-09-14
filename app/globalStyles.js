import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    container: {   
        padding:25,
        borderColor:"red",
        borderWidth:1,
        width:"100%",
        minHeight:896,
        
    },
    btnyellow:{
        width:"100%",
        height:48,
        backgroundColor:'#FF8200',
        textAlign:'center',
        justifyContent: 'center', 
        borderRadius:37,
    },
    screen: {
        flex:1,
        justifyContet: 'center',
        alignItems: 'center',
    },
    title:{
        textAlign:'center',
        marginTop:30,
        fontWeight:'bold'
    },
    btnback:{
        width:15,
        height:20,
    },
    back:{
        position:'absolute',
        top:55,
        left:30,
        backgroundColor:'red'

    }
});

export default globalStyles;