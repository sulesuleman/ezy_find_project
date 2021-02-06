import React,{Component} from 'react';
import { StyleSheet, TouchableOpacity, Text, View, TextInput, TouchableWithoutFeedback,
    Keyboard, } from 'react-native';


const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>{children}</TouchableWithoutFeedback>
);


export default class ChangePassword extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    
    render(){
        return(
            <DismissKeyboard>
                <View style={styles.background}>
                    <View style={styles.foreground}>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => onChangeText(text)}
                        placeholder='Enter Old Password'
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={text => onChangeText(text)}
                        placeholder='Enter New Password'
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={text => onChangeText(text)}
                        placeholder='Confirm Old Password'
                    />
                    
                        <TouchableOpacity
                            style={styles.button}
                            onPress={this.onPress}
                            >
                            <Text style={{color:"white"}}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </DismissKeyboard>
        )
    }
}

const styles= StyleSheet.create({
    background:{
        flex:1,
        backgroundColor:"#c70039",
        justifyContent:'center',
        alignItems:'center',
        padding: '10%'
    },
    foreground:{
        height:'60%',
        width:"100%",
        paddingHorizontal:'7%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        borderRadius:30
    },
    input:{
        width:"100%", 
        padding:"2%", 
        borderColor: '#c70039', 
        borderWidth: 1, 
        borderRadius:10,
        marginBottom:'5%' 
    },
    button:{    
        alignItems: "center",
        backgroundColor: "#c70039",
        padding: 12,
        width:'60%',
        borderRadius:30,
        marginTop:'8%'
    },


})