import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Image, Text, View } from 'react-native';

export default class Clicks extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
    }

    render() {
        return (
            <View style={styles.main}>
                <View>
                    <Text style={styles.header}>User Clicks on </Text>
                    <Text style={styles.header}> Request Item </Text>
                    <Text style={styles.header}>Icon</Text>
                    <Image 
                        source={require('../assets/icons/Cropping/side_1.png')}
                        style={{ width:"100%", height: "50%",resizeMode:"contain", marginTop:20}}/>
                </View>
              </View>
        )
    }
}

const styles = StyleSheet.create({
    main:{
     
     
        paddingHorizontal:'9%',
        backgroundColor: '#fff',
        // alignItems: 'center',
        justifyContent: 'center',},
    header:{
        fontSize:40,
        paddingLeft:'2%',
        fontWeight:"bold",
        textAlign:"center",
        paddingBottom:'3%'
    },
    checklabel: {
        marginTop: '5%'
    },
    tm: {
        fontWeight: 'bold'
    },
    size: {
        fontSize: 15
    },
    buttonbox: {
        justifyContent:'center',
        alignItems:'center',
        marginTop: '12%'
    },
    button:{    
        alignItems: "center",
        backgroundColor: "#c70039",
        padding: 10,
        width:'60%',
        borderRadius:30
    },
    social: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: '12%'
    },
    forgotpassword:{
        flex:1,
        marginTop:'12%',
        justifyContent:'center',
        alignItems:'center',    
    },
    noaccount:{
        flex:1,
        justifyContent:'center',
        alignItems:"center",
        marginTop:'30%'
    }

})