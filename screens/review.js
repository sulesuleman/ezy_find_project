import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Image, Text, View, TextInput, Dimensions } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';

let dimensions = Dimensions.get("window");
let imageHeight = Math.round((dimensions.width * 15) / 23);
let imageWidth = dimensions.width;

export default class Review extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (
            <View>
                <Image
                    source={require('../assets/imgs/house.jpg')}
                    style={{ height: imageHeight, width: imageWidth }}
                />
                <Text style={styles.header}>White House Interior </Text>
                <Rating
                    type='star'
                    ratingCount={5}
                    imageSize={30}
                />

                <View style={styles.textarea}>
                    <TextInput

                        value={this.state.value}
                        onChangeText={text => this.setState({ value: text })}
                        multiline={true}
                        underlineColorAndroid='transparent'
                        placeholder="Write a Reivew"
                    />

                </View>

                <View style={styles.container}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.onPress}
                    >
                        <Text style={{ color: "white" }}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>


        )
    }
}

const styles = StyleSheet.create({
    textarea: {
        marginTop: "4%",
        marginLeft: "10%",
        height: 250,
        width: "80%",
        backgroundColor: "white",
        borderRadius: 15,
        padding: 10,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,



    },
    container: {



        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        fontSize: 20,

        fontWeight: "bold",
        textAlign: "center",
        paddingTop: '3%',
        paddingBottom: '3%',
        color: '#800000'
    },

    checklabel: {
        marginTop: '5%'
    },


    buttonbox: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '12%'
    },
    button: {
        alignItems: "center",
        textAlign: "center"
        , backgroundColor: "#800000",
        paddingHorizontal: 50,
        paddingTop: 8,
        paddingBottom: 8,
        borderRadius: 10,
        marginTop: '8%'
    },


});