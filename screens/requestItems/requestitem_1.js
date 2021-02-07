import React, { Component } from 'react';
import {
    StyleSheet, TouchableOpacity, Text, View, TextInput, ScrollView, Dimensions,
    Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback


} from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';
import { Input, CheckBox, Button, SocialIcon } from 'react-native-elements';
import DatePicker from 'react-native-datepicker'

import { Block, Checkbox,theme } from 'galio-framework';


import { Icon } from '../../components';
import { Images, nowTheme } from '../../constants';

const { width, height } = Dimensions.get('screen');

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>{children}</TouchableWithoutFeedback>
);

export default class RequestItem1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country: 'Select Category',
            date: "2016-05-15"
        }
    }

    gotoNext = () => {
        this.props.navigation.navigate('Request2')
    }

    render() {
        return (
            <DismissKeyboard>
                <ScrollView >
                    <Block flex middle>
                        <Block flex={1} style={styles.background}>
                            <Block flex={0.2}>
                                <Text style={{fontSize:16}}>Slected Category</Text>
                                <Text>Category > Sub Category > Automotive</Text>
                            </Block>
                            <Block
                                style={{
                                    marginTop: 20,
                                    marginBottom: 20,
                                    borderBottomColor: 'lightgrey',
                                    borderBottomWidth: 1,
                                }}
                            />
                            <Block flex space='evenly'>
                                <Text style={styles.text}>Item Details </Text>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={text => onChangeText(text)}
                                    placeholder='Title'
                                />
                                <TextInput
                                    style={styles.input}
                                    onChangeText={text => onChangeText(text)}
                                    placeholder='Title'
                                    numberOfLines={7}
                                />
                                </Block>
                                <View
                                    style={{
                                        marginTop: 20,
                                        marginBottom: 20,
                                        borderBottomColor: 'lightgrey',
                                        borderBottomWidth: 1,
                                    }}
                                />
                                <Block flex={0.3}>
                                    <Text style={styles.text}>Schedule Appointment </Text>
                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <View style={styles.inputWrap}>
                                            <TextInput
                                                style={styles.input}
                                                onChangeText={text => onChangeText(text)}
                                                placeholder='Date'
                                            />
                                        </View>
                                        <View style={styles.inputWrap}>
                                            <TextInput
                                                style={styles.input}
                                                onChangeText={text => onChangeText(text)}
                                                placeholder='Time'
                                            />
                                        </View>
                                    </View>
                                </Block>
                                <View
                                    style={{
                                        marginTop: 20,
                                        marginBottom: 20,
                                        borderBottomColor: 'lightgrey',
                                        borderBottomWidth: 1,
                                    }}
                                />
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <View style={styles.inputWrap}>
                                    <TouchableOpacity
                                        style={styles.buttondisc}
                                        onPress={this.onPress}
                                    >
                                        <Text style={{ color: "#c70039", fontSize: 13, textAlign: 'center' }}>SCAN LICENSE DISC</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.inputWrap}>
                                    <TouchableOpacity
                                        style={styles.button}
                                        onPress={this.gotoNext}
                                    >
                                        <Text style={{ color: "white", fontSize: 13, textAlign: 'center' }}>SUBMIT REQUEST</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </Block>
                    </Block>
                </ScrollView >
            </DismissKeyboard>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        width:width,
        height:height,
        padding: '4%'
    },
    foreground: {

        paddingHorizontal: '7%',
        justifyContent: 'center',
        alignItems: 'center',


    },
    inputWrap: {
        flex: 1,

    },
    searchIcon: {
        padding: 10,
    },
    input: {
        width: "95%",
        padding: "2%",
        borderColor: 'lightgrey',
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

        backgroundColor: "#c70039",
        padding: 18,
        width: '95%',
        borderRadius: 15,
        marginTop: '8%'
    },
    buttondisc: {

        backgroundColor: "#ffffff",
        padding: 18,
        width: '95%',
        borderWidth: 1,
        borderColor: "#c70039",
        borderRadius: 15,
        marginTop: '8%'
    },
    text: {
        marginBottom: 10,
        fontSize: 16,

    },
    checklabel: {
        marginTop: '5%',
        backgroundColor: "transparent"
    },
    tm: {
        fontWeight: 'bold'
    },
    size: {
        fontSize: 15,

    },



})