import React from 'react';
import {
    StyleSheet,
    ImageBackground,
    Dimensions,
    StatusBar,
    TouchableWithoutFeedback,
    Keyboard,
    View,
    Image
} from 'react-native';
import { Block, Checkbox, Text, Button as GaButton, theme } from 'galio-framework';


import { Button, Icon, Input } from '../components';
import { Images, nowTheme } from '../constants';

import logo from '../assets/imgs/logo.png';

const { width, height } = Dimensions.get('screen');

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>{children}</TouchableWithoutFeedback>
);


class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            errors: {
                email: "",

                password: "",
            }
        };
    }

    render() {
        return (
            <DismissKeyboard>
                <Block flex middle>
                    <Block style={styles.SigninContainer}>
                        <Block flex space="evenly">
                            <Block flex={0.2} middle>
                                <Image
                                    source={require('../assets/imgs/logo.png')}
                                />

                            </Block>

                            <Block flex={0} middle
                                style={{ width: width * 0.4 }}
                            >
                                <Text
                                    style={{
                                        fontFamily: 'montserrat-regular',
                                        // textAlign: 'left'
                                    }}

                                    size={18}
                                >
                                    SIGN IN
                                </Text>
                            </Block>
                            <Block flex={1} middle space="between">
                                <Block center flex={1}>
                                    <Block flex space="evenly">

                                        <Block width={width * 0.8} style={{ marginBottom: 5 }}>
                                            <Input
                                                placeholder="User Name"
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
                                        <Text
                                            style={{
                                                fontFamily: 'montserrat-regular',
                                                textAlign: 'center',
                                                color: "darkblue",
                                                textDecorationLine: 'underline'
                                            }}
                                            muted
                                            size={15}
                                        >
                                            Forgot Your Password?
                                            </Text>
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
                                        <Block flex={0.4} middle style={styles.socialConnect}>
                                            <Block flex={0.5} row middle>
                                                <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                                                <View>
                                                    <Text style={{ width: '100%', textAlign: 'center' }}>Sign Up With</Text>
                                                </View>
                                                <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />

                                            </Block>

                                            <Block flex={0.5} row middle space="between" style={{ marginBottom: 18 }}>

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
                                        <Block center>
                                            <Text>
                                                Dont have an account? <Text style={{ fontSize: 16 }}>SIGN UP</Text>
                                            </Text>
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
    SigninContainer: {
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
    }
});

const mapStateToProps = (state) => ({

})

export default Signin;