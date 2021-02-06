import React,{Component} from 'react';
import { StyleSheet, TouchableOpacity, Text, View, TextInput,ScrollView  } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Input, CheckBox, Button, SocialIcon } from 'react-native-elements';

export default class FindBusiness extends Component{
    constructor(props){
        super(props);
        this.state={
  country: 'Select Category'
        }
    }
    
    render(){
        return(
            <ScrollView  >
                <View style={styles.background} >
                <Text style={styles.text}>Comapny Info</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text => onChangeText(text)}
                    placeholder='Enter Company Name'
                />
             <DropDownPicker
    items={[
         {label: 'Select Category', value: 'Select Category'},
        {label: 'USA', value: 'usa'},
        {label: 'UK', value: 'uk'},
        {label: 'France', value: 'france'},
    ]}
    defaultValue={this.state.country}
    containerStyle={{height: 40}}
    style={{backgroundColor: "transparent",
    borderRadius:10,
    borderWidth:1, padding:"2%", 
        borderColor: '#c70039'}}
    itemStyle={{
        justifyContent: 'flex-start'
    }}
    dropDownStyle={{backgroundColor: '#fafafa',color:'purple'}}
    onChangeItem={item => this.setState({
        country: item.value
    })}
/>
         <View
  style={{
    marginTop:20,
    marginBottom:20,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
  }}
/>


 <Text style={styles.text}>Basic User Info</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text => onChangeText(text)}
                    placeholder='First Name'
                />
                <TextInput
                    style={styles.input}
                    onChangeText={text => onChangeText(text)}
                    placeholder='Last Name'
                />
                  <TextInput
                    style={styles.input}
                    onChangeText={text => onChangeText(text)}
                    placeholder='Mobile Number'
                />
                  <TextInput
                    style={styles.input}
                    onChangeText={text => onChangeText(text)}
                    placeholder='Email'
                />

                  <TextInput
                    style={styles.input}
                    onChangeText={text => onChangeText(text)}
                    placeholder='Password'
                />
                  <TextInput
                    style={styles.input}
                    onChangeText={text => onChangeText(text)}
                    placeholder='Confirm Password'
                />
                
                  
                    <View
  style={{
      marginTop:20,
    marginBottom:20,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
  }}
/>
 <Text style={styles.text}>Area Info</Text>
 <View      style={{marginTop:10}}>
             <DropDownPicker
    items={[
         {label: 'Select Category', value: 'Select Category'},
        {label: 'USA', value: 'usa'},
        {label: 'UK', value: 'uk'},
        {label: 'France', value: 'france'},
    ]}
    defaultValue={this.state.country}
    containerStyle={{height: 40}}
    style={{backgroundColor: "transparent",
    borderRadius:10,
    borderWidth:1, padding:"2%", 
        borderColor: '#c70039'}}
    itemStyle={{
        justifyContent: 'flex-start'
    }}
    dropDownStyle={{backgroundColor: '#fafafa',color:'purple'}}
    onChangeItem={item => this.setState({
        country: item.value
    })}
/>
</View>
<View      style={{marginTop:10}}>
             <DropDownPicker
    items={[
         {label: 'Select Category', value: 'Select Category'},
        {label: 'USA', value: 'usa'},
        {label: 'UK', value: 'uk'},
        {label: 'France', value: 'france'},
    ]}
    defaultValue={this.state.country}
    containerStyle={{height: 40}}
    style={{backgroundColor: "transparent",
    borderRadius:10,
    borderWidth:1, padding:"2%", 
        borderColor: '#c70039'}}
    itemStyle={{
        justifyContent: 'flex-start'
    }}
    dropDownStyle={{backgroundColor: '#fafafa',color:'purple'}}
    onChangeItem={item => this.setState({
        country: item.value
    })}
/>
</View>             
<View      style={{marginTop:10}}>
             <DropDownPicker
    items={[
         {label: 'Select Category', value: 'Select Category'},
        {label: 'USA', value: 'usa'},
        {label: 'UK', value: 'uk'},
        {label: 'France', value: 'france'},
    ]}
    defaultValue={this.state.country}
    containerStyle={{height: 40}}
    style={{backgroundColor: "transparent",
    borderRadius:10,
    borderWidth:1, padding:"2%", 
        borderColor: '#c70039'}}
    itemStyle={{
        justifyContent: 'flex-start'
    }}
    dropDownStyle={{backgroundColor: '#fafafa',color:'purple'}}
    onChangeItem={item => this.setState({
        country: item.value
    })}
/>
</View>
 <View style={styles.checklabel}>
                    <CheckBox
                        style={styles.size}
                        checked={this.state.checked}
                        title={
                            <Text style={styles.size}>I agree that the inofrmation provided above is true to my knowledge and accept the term & condition </Text>
                        }
                        onPress={this.togglecheck}

                    />
                </View>
                <View style={styles.foreground}> 
  <TouchableOpacity
                        style={styles.button}
                        onPress={this.onPress}
                        >
                        <Text style={{color:"white"}}>Proceed</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </ScrollView >
        )
    }
}

const styles= StyleSheet.create({
    background:{

        padding: '4%'
    },
    foreground:{
      
        paddingHorizontal:'7%',
        justifyContent:'center',
        alignItems:'center',
       
     
    },
    searchIcon: {
    padding: 10,
},
    input:{
        width:"100%", 
        padding:"2%", 
        borderColor: '#c70039', 
        borderWidth: 1, 
        borderRadius:10,
        marginBottom:'5%' 
    },
      inputpicker:{
        width:"100%", 
        padding:"2%", 
     
        borderColor: '#c70039', 
        borderWidth: 1, 
        borderRadius:10,
        marginBottom:'5%' 
    },
    button:{    
        alignItems: "center",
        justifyContent:"center",
        backgroundColor: "#c70039",
        padding: 12,
        width:'60%',
        borderRadius:15,
        marginTop:'8%'
    },
    text:{
      marginBottom:10,
      fontSize:16,
    
    },
       checklabel: {
        marginTop: '5%',
        backgroundColor:"transparent"
    },
    tm: {
        fontWeight: 'bold'
    },
    size: {
        fontSize: 15,
      
    },



})