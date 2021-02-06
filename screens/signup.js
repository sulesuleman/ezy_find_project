import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

// import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, CheckBox, Button, SocialIcon } from 'react-native-elements';


export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: true,
        }
    }


    togglecheck = () => {
        this.setState({
            checked: !this.state.checked
        })
    }


    render() {
        return (
            <View style={styles.main}>
                <View>
                    <Input
                        placeholder='EMAIL'
                    />
                    <Input
                        placeholder='PASSWORD'
                    />
                    <Input
                        placeholder='REPEAT PASSWORD'
                    />
                </View>
                <View style={styles.checklabel}>
                    <CheckBox
                        style={styles.size}
                        checked={this.state.checked}
                        title={
                            <Text style={styles.size}>I agree with the <Text style={{fontWeight:'bold', fontSize:14.5}}>Terms and Conditions</Text></Text>
                        }
                        onPress={this.togglecheck}

                    />
                </View>
                <View style={styles.buttonbox}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.onPress}
                        >
                        <Text style={{color:"white"}}>Continue</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:"15%" }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                    <View>
                        <Text style={{ width: '100%', textAlign: 'center' }}>Sign Up With</Text>
                    </View>
                    <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                </View>
                <View style={styles.social}>
                    <SocialIcon
                        raised={true}
                        type='facebook'
                    />
                    <SocialIcon
                        raised={true}
                        type='google'
                    />
                    <SocialIcon
                        raised={true}
                        type='linkedin'
                    />
                    <SocialIcon
                        raised={true}
                        type='twitter'
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        marginTop:'5%',
        paddingHorizontal:'9%',
        backgroundColor: '#fff',
        // alignItems: 'center',
        justifyContent: 'center',
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
        marginTop: '10%'
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
        marginTop: '12%'
    }


})