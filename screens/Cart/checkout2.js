import React from 'react';

import {Text, View, TouchableOpacity, TextInput,StyleSheet,ScrollView} from 'react-native';
import {rateHeight, rateWidth} from './device';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CheckoutStep from './checkstep';
import * as selectors from './selectors';
import * as actions from './actions';
import {connect} from 'react-redux';


class Address extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      isCheck: false,
      street1: '',
      street2: '',
      city: '',
      state: '',
      country: ''
    }
  }
  backClick = () => {
    const {navigation} = this.props;
    navigation.goBack();
  };

  nextAction = () => {
    const {navigation} = this.props;
    console.log("props checkout2: ",this.props.route.params.data)
    navigation.navigate('Payment',{data:this.props.route.params.data});
  };
  nextActioncash = () => {
    const {navigation} = this.props;
    navigation.navigate('Maincheckout');
  };
  backAction = () => {
    const {navigation} = this.props;
    navigation.navigate('Checkout');
  };

  changeAddress = (data) => {
    const {address} = this.props;
    const {settingAddressPayment} = this.props;
    settingAddressPayment({...address, ...data});
  };

   render() {

    const {isCheck, navigation} = this.props;
    const checkBoxColor = isCheck ? '#00c569' : 'darkgreen';
   
    const bottomProps = {
      isShowLeftButton: true,
      textLeftButton: 'BACK',
      textRightButton: 'NEXT',
      actionLeftClick: this.backAction,
      actionRightClick: this.nextAction,
    };
    const bottomPropscash = {
      isShowLeftButton: true,
      textLeftButton: 'BACK',
      textRightButton: 'NEXT',
      actionLeftClick: this.backAction,
      actionRightClick: this.nextActioncash,
    };
    return (
      <ScrollView>
      <View style={styles.form}>
        <View style={styles.graphicView}>
          <View style={styles.line}></View>
          <View style={styles.graphic}>
            <View style={styles.circle1}>
              <View style={styles.circle2}></View>
            </View>
            <Text style={styles.graphicTextBold}>{`Delivery`}</Text>
          </View>
          <View style={styles.graphic1}>
            <View style={styles.circle1}>
              <View style={styles.circle2}></View>
            </View>
            <Text style={styles.graphicTextBold}>{`Address`}</Text>
          </View>
          <View style={styles.graphic}>
            <View style={styles.circleNormal1}>
              {/* <View style={styles.circle2}></View> */}
            </View>
            <Text style={styles.graphicTextNormal}>{`Payments`}</Text>
          </View>
        </View>
        <View style={styles.contentView}>
          {/* checkbox */}
          <View style={styles.view}>
            <TouchableOpacity
              style={styles.rowView}
              onPress={() => this.changeAddress({isCheck: !isCheck})}>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <AntDesign name="checkcircle" color={checkBoxColor} size={20} />
              </View>
              <View style={{flex: 9}}>
                <Text
                  style={
                    styles.contentText
                  }>{`Billing address is the same as delivery address`}</Text>
              </View>
            </TouchableOpacity>
          </View>
          {/* Address setting */}
          <View style={styles.inputView}>
          <View style={styles.inputItemRowView}>
              <TouchableOpacity style={styles.inputItemRowChild}>
                <Text style={styles.inputTitleText}>{`First Name`}</Text>
                <TextInput
                  style={styles.inputContentText}
                  onChangeText={(text) => this.changeAddress({First_Name: text})}
                  value={this.props.First_Name}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.inputItemRowChild}>
                <Text style={styles.inputTitleText}>{`Last Name`}</Text>
                <TextInput
                  style={styles.inputContentText}
                  onChangeText={(text) => this.changeAddress({Last_Name: text})}
                  value={this.props.Last_Name}
                />
              </TouchableOpacity>
            </View>
          
            <TouchableOpacity style={styles.inputItemView}>
              <Text style={styles.inputTitleText}>{`Phone`}</Text>
              <TextInput
                style={styles.inputContentText}
                onChangeText={(text) => this.changeAddress({Phone: text})}
                value={this.props.Phone}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.inputItemView}>
              <Text style={styles.inputTitleText}>{`Email`}</Text>
              <TextInput
                style={styles.inputContentText}
                onChangeText={(text) => this.changeAddress({Email: text})}
                value={this.props.Email}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.inputItemView}>
              <Text style={styles.inputTitleText}>{`Address`}</Text>
              <TextInput
                style={styles.inputContentText}
                onChangeText={(text) => this.changeAddress({Address: text})}
                value={this.props.Address}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.inputItemView}>
              <Text style={styles.inputTitleText}>{`City`}</Text>
              <TextInput
                style={styles.inputContentText}
                onChangeText={(text) => this.changeAddress({City: text})}
                value={this.props.City}
              />
            </TouchableOpacity>
            <View style={styles.inputItemRowView}>
              <TouchableOpacity style={styles.inputItemRowChild}>
                <Text style={styles.inputTitleText}>{`State`}</Text>
                <TextInput
                  style={styles.inputContentText}
                  onChangeText={(text) => this.changeAddress({State: text})}
                  value={this.props.State}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.inputItemRowChild}>
                <Text style={styles.inputTitleText}>{`Postal Code`}</Text>
                <TextInput
                  style={styles.inputContentText}
                  onChangeText={(text) => this.changeAddress({Postal_code: text})}
                  value={this.props.Postal_code}
                />
              </TouchableOpacity>
            </View>
          </View>
         
        </View>
        <View style={{marginBottom:20,marginTop:-40}}>
          {this.props.deliveryCase===1?
          <CheckoutStep {...bottomProps} />
  :
  <CheckoutStep {...bottomPropscash} />
    }
      </View>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      
    },
  
    form: {
      flex: 1,
      justifyContent: 'center',
    },
  
    graphicView: {
      // flex: 1,
      height: 100 * rateHeight,
      paddingTop: 20,
      flexDirection: 'row',
      // backgroundColor: 'red',
    },
  
    contentView: {
      marginBottom: 100,
    },
  
    // graphicView
    graphic: {
      flex: 1,
      alignItems: 'center',
    },
    graphic1: {
      flex: 3,
      alignItems: 'center',
    },
    circle2: {
      width: 16,
      height: 16,
      backgroundColor: '#00c569',
      borderRadius: 30,
    },
  
    circle1: {
      width: 30,
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
      backgroundColor: '#ffffff',
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: '#00c569',
    },
  
    circleNormal1: {
      width: 30,
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
      backgroundColor: '#ffffff',
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: 'rgba(0, 0, 0, 0.1)',
    },
  
    graphicTextBold: {
      marginTop: 14,
      fontFamily: 'System',
      fontSize: 12,
      fontWeight: 'normal',
      fontStyle: 'normal',
      lineHeight: 14,
      letterSpacing: 0,
      textAlign: 'center',
      color: '#000000',
    },
  
    graphicTextNormal: {
      marginTop: 14,
      fontFamily: 'System',
      fontSize: 12,
      fontWeight: 'normal',
      fontStyle: 'normal',
      lineHeight: 14,
      letterSpacing: 0,
      textAlign: 'center',
      color: 'rgba(0, 0, 0, 0.5)',
    },
  
    line: {
      width: 300,
      position: 'absolute',
      marginTop: 35,
      marginHorizontal: 20,
      borderRadius: 4,
      backgroundColor: '#ffffff',
      borderStyle: 'solid',
      borderWidth: 0.5,
      borderColor: '#dddddd',
    },
  
    //  ContentView
    view: {
      paddingHorizontal: 16 * rateWidth,
    },
    rowView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  
    viewCheck: {
      width: 24,
      height: 24,
      borderRadius: 30,
      backgroundColor: '#00c569',
    },
    viewUncheck: {},
    titleText: {
      fontFamily: 'System',
      fontSize: 18,
      fontWeight: 'bold',
      fontStyle: 'normal',
      lineHeight: 26,
      letterSpacing: 0,
      textAlign: 'left',
      color: '#000000',
    },
    contentText: {
        marginVertical: "10%",
      fontFamily: 'System',
      fontSize: 14,
      fontWeight: 'normal',
      fontStyle: 'normal',
      lineHeight: 23,
      letterSpacing: 0,
      textAlign: 'left',
      color: '#000000',
    },
  
    // Address content
    inputView: {
      paddingHorizontal: 16 * rateWidth,
    },
    inputItemView: {
      marginTop: 20 * rateHeight,
      height: 67 * rateHeight,
    },
    inputItemRowView: {
      marginTop: 20 * rateHeight,
      flexDirection: 'row',
      height: 67 * rateHeight,
    },
    inputItemRowChild: {
      flex: 1,
      height: 67 * rateHeight,
    },
    inputTitleText: {
      fontFamily: 'System',
      fontSize: 14,
      fontWeight: 'normal',
      fontStyle: 'normal',
      letterSpacing: 0,
      textAlign: 'left',
      color: 'rgba(0, 0, 0, 0.5)',
    },
    inputContentText: {
      fontFamily: 'System',
      fontSize: 18,
      fontWeight: 'normal',
      fontStyle: 'normal',
      letterSpacing: 0,
      textAlign: 'left',
      color: '#000000',
      borderBottomColor: '#ddd',
      borderBottomWidth: 1,
    },
  });
  
const mapStateToProps = (state) => ({
  address: selectors.getAddressPayment(state),
  isCheck: selectors.getAddressPayment(state)['isCheck'],
  First_Name: selectors.getAddressPayment(state)['First_Name'],
  Last_Name: selectors.getAddressPayment(state)['Last_Name'],
  Phone: selectors.getAddressPayment(state)['Phone'],
  Email: selectors.getAddressPayment(state)['Email'],
  Address: selectors.getAddressPayment(state)['Address'],
  City: selectors.getAddressPayment(state)['City'],
  State: selectors.getAddressPayment(state)['State'],
  Postal_code: selectors.getAddressPayment(state)['Postal_code'],
  cartProducts: selectors.getCartProducts(state),
  deliveryCase: selectors.getDeliveryCase(state),

});
export default connect(mapStateToProps, {...actions})(Address)
