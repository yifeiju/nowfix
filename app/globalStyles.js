import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    container: {   
        padding:25,
        //borderColor:"red",
        //borderWidth:1,
        width:"100%",
        minHeight:'100%'
        
    },
    btnyellow:{
        width:"100%",
        height:48,
        backgroundColor:'#FF8200',
        textAlign:'center',
        justifyContent: 'center', 
        borderRadius:37,
    },
    btnyellow2:{
        width:"100%",
        height:48,
        backgroundColor:'#FF8200',
        textAlign:'center',
        alignItems:'center',
        justifyContent: 'space-between', 
        borderRadius:37,
        flexDirection:'row'
    },
    screen: {
        flex:1,
        justifyContet: 'center',
        alignItems: 'center',
    },
    title:{
        textAlign:'center',
        marginTop:30,
        fontWeight:'bold',
        
        
    },
    title1:{
        textAlign:'center',
        fontWeight:'bold',
    },
    titleview:{
        display:'flex',
        flexDirection:'row', 
        flexWrap:"wrap",
        justifyContent:'space-between', 
        marginTop:30
    },

    btnback:{
        width:15,
        height:20,
    },
    white:{
        color:'white',
    }
});

export default globalStyles;