// import React, { Component } from 'react';
// import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

// // import Icon from 'react-native-vector-icons/FontAwesome';
// import { Input, CheckBox, Button, SocialIcon } from 'react-native-elements';


// export default class Signup extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             checked: true,
//         }
//     }


//     togglecheck = () => {
//         this.setState({
//             checked: !this.state.checked
//         })
//     }


//     render() {
//         return (
//             <View style={styles.main}>
//                 <View>
//                     <Input
//                         placeholder='EMAIL'
//                     />
//                     <Input
//                         placeholder='PASSWORD'
//                     />
//                     <Input
//                         placeholder='REPEAT PASSWORD'
//                     />
//                 </View>
//                 <View style={styles.checklabel}>
//                     <CheckBox
//                         style={styles.size}
//                         checked={this.state.checked}
//                         title={
//                             <Text style={styles.size}>I agree with the <Text style={{fontWeight:'bold', fontSize:14.5}}>Terms and Conditions</Text></Text>
//                         }
//                         onPress={this.togglecheck}

//                     />
//                 </View>
//                 <View style={styles.buttonbox}>
//                     <TouchableOpacity
//                         style={styles.button}
//                         onPress={this.onPress}
//                         >
//                         <Text style={{color:"white"}}>Continue</Text>
//                     </TouchableOpacity>
//                 </View>
//                 <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:"15%" }}>
//                     <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
//                     <View>
//                         <Text style={{ width: '100%', textAlign: 'center' }}>Sign Up With</Text>
//                     </View>
//                     <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
//                 </View>
//                 <View style={styles.social}>
//                     <SocialIcon
//                         raised={true}
//                         type='facebook'
//                     />
//                     <SocialIcon
//                         raised={true}
//                         type='google'
//                     />
//                     <SocialIcon
//                         raised={true}
//                         type='linkedin'
//                     />
//                     <SocialIcon
//                         raised={true}
//                         type='twitter'
//                     />
//                 </View>
//             </View>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     main:{
//         flex:1,
//         marginTop:'5%',
//         paddingHorizontal:'9%',
//         backgroundColor: '#fff',
//         // alignItems: 'center',
//         justifyContent: 'center',
//     },
//     checklabel: {
//         marginTop: '5%'
//     },
//     tm: {
//         fontWeight: 'bold'
//     },
//     size: {
//         fontSize: 15
//     },
//     buttonbox: {
//         justifyContent:'center',
//         alignItems:'center',
//         marginTop: '10%'
//     },
//     button:{    
//         alignItems: "center",
//         backgroundColor: "#c70039",
//         padding: 10,
//         width:'60%',
//         borderRadius:30
//     },
//     social: {
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'space-evenly',
//         marginTop: '12%'
//     }


// })

import React from 'react';
import {
    StyleSheet,
    ImageBackground,
    Dimensions,
    StatusBar,
    TouchableWithoutFeedback,
    Keyboard,
    View,
    Image,
    Modal,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';
import { Block, Checkbox, Text, Button as GaButton, theme } from 'galio-framework';


import { Button, Icon, Input } from '../components';
import { Images, nowTheme } from '../constants';


const { width, height } = Dimensions.get('screen');

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>{children}</TouchableWithoutFeedback>
);


class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            email: null,
            password: null,
            repeat: null,
            modalVisible: false,
            errors: {
                email: "",

                password: "",
            }
        };
    }

    login = () => {
        this.setModalVisible(true);
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    render() {
        return (
            <DismissKeyboard>
                <Block flex={1} middle>
                    <Block flex={1} style={styles.SignupContainer}>
                        <Block flex={1} middle >
                            <Block flex={1} middle space="between">
                                <Block middle flex={1}>
                                    <Block flex={1} space="evenly">
                                        <Block flex={0.5} >
                                            <Block width={width * 0.8} style={{ marginBottom: 5 }}>
                                                <Input
                                                    placeholder="Email"
                                                    style={styles.inputs}
                                                    autoCapitalize="none"

                                                    iconContent={
                                                        <Icon
                                                            size={16}
                                                            color="#ADB5BD"
                                                            name="profile-circle"
                                                            family="NowExtra"
                                                            style={styles.inputIcons}
                                                        />
                                                    }
                                                />

                                            </Block>
                                            <Block width={width * 0.8} style={{ marginBottom: 5 }}>
                                                <Input
                                                    placeholder="Password"
                                                    style={styles.inputs}
                                                    autoCapitalize="none"
                                                    secureTextEntry={true}
                                                    iconContent={
                                                        <Icon
                                                            size={16}
                                                            color="#ADB5BD"
                                                            name="caps-small2x"
                                                            family="NowExtra"
                                                            style={styles.inputIcons}
                                                        />
                                                    }
                                                />

                                            </Block>
                                            <Block width={width * 0.8} style={{ marginBottom: 5 }}>
                                                <Input
                                                    placeholder="Repeat Password"
                                                    style={styles.inputs}
                                                    autoCapitalize="none"
                                                    secureTextEntry={true}
                                                    iconContent={
                                                        <Icon
                                                            size={16}
                                                            color="#ADB5BD"
                                                            name="caps-small2x"
                                                            family="NowExtra"
                                                            style={styles.inputIcons}
                                                        />
                                                    }
                                                />

                                            </Block>
                                            <Block
                                                style={{ marginVertical: theme.SIZES.BASE, marginLeft: 15 }}
                                                row
                                                width={width * 0.75}
                                            >
                                                <Checkbox
                                                    checkboxStyle={{
                                                        borderWidth: 1,
                                                        borderRadius: 2,
                                                        borderColor: '#E3E3E3'
                                                    }}
                                                    color={nowTheme.COLORS.GOOGLE}
                                                    labelStyle={{
                                                        color: nowTheme.COLORS.HEADER,
                                                        fontFamily: 'montserrat-regular'
                                                    }}
                                                    label={
                                                        <Text style={{ fontSize: 12 }}>I agree with the <Text style={{ fontWeight: 'bold', fontSize: 13 }}>Terms and Conditions</Text></Text>

                                                    }
                                                />
                                            </Block>
                                            <View style={styles.centeredView}>
                                                <Modal
                                                    animationType="slide"
                                                    transparent={true}
                                                    visible={this.state.modalVisible}
                                                    onRequestClose={() => {
                                                        this.setState({ modalVisible: false })

                                                    }}
                                                >
                                                    <View style={styles.centeredView}>
                                                        <View style={styles.modalView}>
                                                            <Text style={styles.textStyle}>Select Account Type</Text>
                                                            <View style={styles.containermodel}>
                                                                <View style={{
                                                                    borderColor: '#800080', borderRadius: 10,
                                                                    padding: 10,


                                                                    elevation: 2,
                                                                    borderWidth: 1, height: 120
                                                                }}>
                                                                    <View style={styles.openButton} >
                                                                        <Image
                                                                            source={require('../assets/imgs/user.png')}


                                                                        />
                                                                        <TouchableHighlight

                                                                            onPress={() => {
                                                                                this.setModalVisible(!this.state.modalVisible);
                                                                            }}
                                                                        >

                                                                            <Text style={styles.textStyletext}>Individual</Text>
                                                                        </TouchableHighlight>
                                                                    </View>
                                                                </View>
                                                                <View style={{
                                                                    borderColor: '#800080', borderRadius: 10,
                                                                    padding: 10,
                                                                    marginLeft: 20,

                                                                    elevation: 2,
                                                                    borderWidth: 1, height: 120
                                                                }}>
                                                                    <View style={styles.openButtonbuss} >
                                                                        <Image
                                                                            source={require('../assets/imgs/business.png')}


                                                                        />
                                                                        <TouchableHighlight

                                                                            onPress={() => {
                                                                                this.setModalVisible(!this.state.modalVisible);
                                                                            }}
                                                                        >

                                                                            <Text style={styles.textStyletext}>Business</Text>
                                                                        </TouchableHighlight>
                                                                    </View>
                                                                </View>
                                                            </View>
                                                            <View style={styles.container}>
                                                                <TouchableOpacity
                                                                    style={styles.buttonpro}
                                                                    onPress={this.onPress}
                                                                >
                                                                    <Text style={{ color: "white" }}>Proceed</Text>
                                                                </TouchableOpacity>
                                                            </View>
                                                        </View>
                                                    </View>
                                                </Modal>
                                            </View>
                                            <Block center>
                                                <Button onPress={this.login} color="google" round style={styles.createButton}>
                                                    <Text
                                                        style={{ fontFamily: 'montserrat-bold' }}
                                                        size={14}
                                                        color={nowTheme.COLORS.WHITE}
                                                    >
                                                        Continue
                                                    </Text>
                                                </Button>
                                            </Block>
                                        </Block>
                                        <Block flex={0.5} middle style={styles.socialConnect}>
                                            <Block flex={0.2} row middle>
                                                <Block flex style={{ height: 1, backgroundColor: 'black' }} />
                                                <Block >
                                                    <Text style={{ width: '100%', textAlign: 'center' }}>Sign Up With</Text>
                                                </Block>
                                                <Block flex style={{ height: 1, backgroundColor: 'black' }} />

                                            </Block>

                                            <Block flex={0.3} row middle >

                                                <GaButton
                                                    round
                                                    onlyIcon
                                                    shadowless
                                                    icon="facebook"
                                                    iconFamily="Font-Awesome"
                                                    iconColor={theme.COLORS.WHITE}
                                                    iconSize={theme.SIZES.BASE * 1.625}
                                                    color={nowTheme.COLORS.FACEBOOK}
                                                    style={[styles.social, styles.shadow]}
                                                />
                                                <GaButton
                                                    round
                                                    onlyIcon
                                                    shadowless
                                                    icon="google"
                                                    iconFamily="Font-Awesome"
                                                    iconColor={theme.COLORS.WHITE}
                                                    iconSize={theme.SIZES.BASE * 1.625}
                                                    color={nowTheme.COLORS.GOOGLE}
                                                    style={[styles.social, styles.shadow]}
                                                />
                                                <GaButton
                                                    round
                                                    onlyIcon
                                                    shadowless
                                                    icon="linkedin"
                                                    iconFamily="Font-Awesome"
                                                    iconColor={theme.COLORS.WHITE}
                                                    iconSize={theme.SIZES.BASE * 1.625}
                                                    color={nowTheme.COLORS.LINKEDIN}
                                                    style={[styles.social, styles.shadow]}
                                                />
                                                <GaButton
                                                    round
                                                    onlyIcon
                                                    shadowless
                                                    icon="twitter"
                                                    iconFamily="Font-Awesome"
                                                    iconColor={theme.COLORS.WHITE}
                                                    iconSize={theme.SIZES.BASE * 1.625}
                                                    color={nowTheme.COLORS.TWITTER}
                                                    style={[styles.social, styles.shadow]}
                                                />
                                            </Block>
                                        </Block>
                                    </Block>
                                </Block>
                            </Block>
                        </Block>
                    </Block>
                </Block>
            </DismissKeyboard>
        );
    }
}

const styles = StyleSheet.create({
    imageBackgroundContainer: {
        width: width,
        height: height,
        padding: 0,
        zIndex: 1
    },
    imageBackground: {
        width: width,
        height: height
    },
    captionTextStyle: {
        color: "red"
    },
    SignupContainer: {
        width: width,
        height: height,
        backgroundColor: nowTheme.COLORS.WHITE,
    },
    socialConnect: {
        backgroundColor: nowTheme.COLORS.WHITE
        // borderBottomWidth: StyleSheet.hairlineWidth,
        // borderColor: "rgba(136, 152, 170, 0.3)"
    },
    socialButtons: {
        width: 120,
        height: 40,
        backgroundColor: '#fff',
        shadowColor: nowTheme.COLORS.BLACK,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 8,
        shadowOpacity: 0.1,
        elevation: 1
    },
    socialTextButtons: {
        color: nowTheme.COLORS.PRIMARY,
        fontWeight: '800',
        fontSize: 14
    },
    inputIcons: {
        marginRight: 12,
        color: nowTheme.COLORS.ICON_INPUT
    },
    inputs: {
        borderWidth: 1,
        borderColor: '#E3E3E3',
        borderRadius: 21.5
    },
    passwordCheck: {
        paddingLeft: 2,
        paddingTop: 6,
        paddingBottom: 15
    },
    createButton: {
        width: width * 0.4,
        marginTop: 25,
        marginBottom: 40
    },
    social: {
        width: theme.SIZES.BASE * 3.5,
        height: theme.SIZES.BASE * 3.5,
        borderRadius: theme.SIZES.BASE * 1.75,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,

    },
    modalView: {
        marginBottom: 4,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        height: 300,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "white",


    },
    openButtonbuss: {
        backgroundColor: "white",


    },
    textStyle: {
        marginTop: 0,
        color: "black",
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
        marginBottom: 10,
    },
    textStyletext: {
        marginTop: 10,
        color: "black",
        fontWeight: "bold",

        textAlign: "center",
        marginBottom: 10,
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonpro: {
        alignItems: "center",
        textAlign: "center"
        , backgroundColor: "#800000",
        paddingHorizontal: 40,
        paddingTop: 8,
        paddingBottom: 8,
        borderRadius: 10,
        marginTop: '8%'
    },
});

export default Signup;