import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, TextInput, ScrollView, Image, Dimensions } from 'react-native';


export default class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
        }
    }
    render() {
        return (
            <ScrollView  >
                <View style={styles.background} >
                    <Text style={styles.text}>Payment Details</Text>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={styles.inputWrap}>
                            <Text style={styles.textpa}>Package Cost</Text>
                        </View>
                        <View style={styles.inputWrap}>
                            <Text style={styles.textval}>R 349.00</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', paddingTop: 10 }}>
                        <View style={styles.inputWrap}>
                            <Text style={styles.textpa}>Discount</Text>
                        </View>
                        <View style={styles.inputWrap}>
                            <Text style={styles.textval}>R 0.00</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', paddingTop: 10 }}>
                        <View style={styles.inputWrap}>
                            <Text style={styles.textpa}>VAC (15%)</Text>
                        </View>
                        <View style={styles.inputWrap}>
                            <Text style={styles.textval}>R 52.35</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', paddingTop: 10 }}>
                        <View style={styles.inputWrap}>
                            <Text style={styles.textpa}>Total</Text>
                        </View>
                        <View style={styles.inputWrap}>
                            <Text style={styles.textval}>R 401.25</Text>
                        </View>

                    </View>

                    <View
                        style={{
                            marginTop: 20,
                            marginBottom: 20,
                            borderBottomColor: 'lightgrey',
                            borderBottomWidth: 1,
                        }}
                    />
                    <Text style={styles.text}>Select Method of Payment </Text>
                    <View style={{ flex: 1, flexDirection: 'row', paddingTop: 10 }}>
                        <View style={styles.img}>
                            <Image
                                source={require('../assets/icons/Cropping/master.png')}


                            />
                        </View>
                        <View style={styles.img}>
                            <Image
                                source={require('../assets/icons/Cropping/visa.png')}


                            />
                        </View>
                        <View style={styles.img}>
                            <Image
                                source={require('../assets/icons/Cropping/paypal.png')}


                            />
                        </View>
                    </View>
                    <View style={{ marginTop: 20 }}></View>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => onChangeText(text)}
                        placeholder='Enter Account Number'
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={text => onChangeText(text)}
                        placeholder='Enter Verification Password'
                    />


                    <View style={styles.foreground}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={this.onPress}
                        >
                            <Text style={{ color: "white" }}>Confirm Payment</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView >
        )
    }
}

const styles = StyleSheet.create({
    background: {

        padding: '4%'
    },
    img: {
        flex: 1,



    },
    inputWrap: {
        flex: 1,


    },
    foreground: {

        paddingHorizontal: '7%',
        justifyContent: 'center',
        alignItems: 'center',


    },
    searchIcon: {
        padding: 10,
    },
    input: {
        width: "100%",
        padding: "2%",
        borderColor: '#c70039',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: '5%'
    },
    inputpicker: {
        width: "100%",
        padding: "2%",

        borderColor: '#c70039',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: '5%'
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#c70039",
        padding: 12,
        width: '70%',
        borderRadius: 15,
        marginTop: '8%'
    },
    text: {
        marginBottom: 10,
        fontSize: 18,

    },
    textval: {
        fontSize: 16,
        textAlign: 'right',
        color: "#c70039"
    },
    textpa: {

        fontSize: 14,
    },

})