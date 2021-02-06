import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, TextInput, ScrollView, Dimensions } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import MapView from 'react-native-maps';
import Switch from '../components/Switch';


export default class Request extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country: 'Select Province /State',
            city: 'Select City',
            subrub: 'Select Subrub',
            isEnabled: false,
            mapRegion: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0999,
                longitudeDelta: 0.0999,
            },
        }
    }

    toggleSwitch = () => {
        this.setState({ isEnabled: !this.state.isEnabled })
    }
    onRegionChange = (region) => {
        this.setState({ mapRegion: region });
    }
    render() {
        return (
            <ScrollView  >
                <View style={styles.background} >
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={styles.inputWrap}>
                            <Text style={styles.text}>Set Location</Text>
                        </View>
                        <View style={styles.inputWrap}>
                            {/* <Switch
                                trackColor={{ false: "#ffffff", true: "#81b0ff" }}
                                thumbColor={this.state.isEnabled ? "#c70039" : "#c70039"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={this.toggleSwitch}
                                value={this.state.isEnabled}
                            /> */}
                            <Switch
                                onValueChange={this.toggleSwitch}
                                value={this.state.isEnabled} 
                            />
                        </View>
                    </View>
                    <View style={styles.container}>
                        <MapView style={styles.map}
                            region={this.state.mapRegion}
                            onRegionChange={this.onRegionChange}
                        >

                        </MapView>
                    </View>
                    <View
                        style={{
                            marginTop: 20,
                            marginBottom: 20,
                            borderBottomColor: 'lightgrey',
                            borderBottomWidth: 1,
                        }}
                    />
                    <View style={{ marginTop: 10 }}>
                        <DropDownPicker
                            items={[
                                { label: 'Select Province /State', value: 'Select Province /State' },
                                { label: 'USA', value: 'usa' },
                                { label: 'UK', value: 'uk' },
                                { label: 'France', value: 'france' },
                            ]}
                            defaultValue={this.state.country}
                            containerStyle={{ height: 40 }}
                            style={{
                                backgroundColor: "transparent",
                                borderRadius: 10,
                                color: 'black',
                                borderWidth: 1, padding: "2%",
                                borderColor: 'lightgrey'
                            }}
                            itemStyle={{
                                justifyContent: 'flex-start'
                            }}
                            dropDownStyle={{ backgroundColor: '#fafafa' }}
                            onChangeItem={item => this.setState({
                                country: item.value
                            })}
                        />
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <DropDownPicker
                            items={[
                                { label: 'Select City', value: 'Select City' },
                                { label: 'USA', value: 'usa' },
                                { label: 'UK', value: 'uk' },
                                { label: 'France', value: 'france' },
                            ]}
                            defaultValue={this.state.city}
                            containerStyle={{ height: 40 }}
                            style={{
                                backgroundColor: "transparent",
                                borderRadius: 10,
                                borderWidth: 1, padding: "2%",
                                borderColor: 'lightgrey'
                            }}
                            itemStyle={{
                                justifyContent: 'flex-start'
                            }}
                            dropDownStyle={{ backgroundColor: '#fafafa', color: 'purple' }}
                            onChangeItem={item => this.setState({
                                country: item.value
                            })}
                        />
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <DropDownPicker
                            items={[
                                { label: 'Select Subrub', value: 'Select Subrub' },
                                { label: 'USA', value: 'usa' },
                                { label: 'UK', value: 'uk' },
                                { label: 'France', value: 'france' },
                            ]}
                            defaultValue={this.state.subrub}
                            containerStyle={{ height: 40 }}
                            style={{
                                backgroundColor: "transparent",
                                borderRadius: 10,
                                borderWidth: 1, padding: "2%",
                                borderColor: 'lightgrey'
                            }}
                            itemStyle={{
                                justifyContent: 'flex-start'
                            }}
                            dropDownStyle={{ backgroundColor: '#fafafa', color: 'purple' }}
                            onChangeItem={item => this.setState({
                                country: item.value
                            })}
                        />
                    </View>
                    <View style={styles.foreground}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={this.onPress}
                        >
                            <Text style={{ color: "white" }}>Proceed</Text>
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
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: 16,
        borderWidth: 0,
        borderColor: 'lightgrey',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    map: {
        resizeMode:'contain',
        width: (Dimensions.get('window').width / 1.1),
        height: (Dimensions.get('window').height / 2.55),
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#c70039",
        padding: 12,
        width: '100%',
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