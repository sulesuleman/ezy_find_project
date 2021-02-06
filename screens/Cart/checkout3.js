import React from 'react';
import {connect} from 'react-redux';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {rateHeight, rateWidth} from './device';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {CreditCardInput} from 'react-native-credit-card-input';
import * as selectors from './selectors';
import * as actions from './actions';
import CheckoutStep  from './checkstep';


class PaymentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCheck: true,
    };
  }
  backClick = () => {
    const {navigation} = this.props;
    navigation.goBack();
  };
  nextAction = () => {
    const {navigation} = this.props;
    console.log("checkout3: ",this.props.route.params.data)
    navigation.navigate('Maincheckout',{data:this.props.route.params.data});
  };
  backAction = () => {
    const {navigation} = this.props;
    navigation.navigate('Address');
  };

  _onChange = (form) => {
    const {settingCardPayment} = this.props;
    settingCardPayment({...form});
  };

   render() {
    const bottomProps = {
      isShowLeftButton: true,
      textLeftButton: 'BACK',
      textRightButton: 'NEXT',
      actionLeftClick: this.backAction,
      actionRightClick: this.nextAction,
    };
    
    const {isCheck} = this.state;
    const checkBoxColor = isCheck ? '#00c569' : 'green';
    const {navigation} = this.props
    return (
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
            <View style={styles.circle1}>
              <View style={styles.circle2}></View>
            </View>
            <Text style={styles.graphicTextBold}>{`Payments`}</Text>
          </View>
        </View>
        <View style={styles.contentView}>
          <CreditCardInput onChange={this._onChange} />
        </View>
        {/* checkbox */}
        <View style={styles.view}>
          <TouchableOpacity
            style={styles.rowView}
            onPress={() => this.setState({isCheck: !isCheck})}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <AntDesign name="checkcircle" color={checkBoxColor} size={20} />
            </View>
            <View style={{flex: 9}}>
              <Text style={styles.contentText}>{`Save this card details`}</Text>
            </View>
          </TouchableOpacity>
        </View>
        
        <CheckoutStep {...bottomProps} />
      </View>
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
      marginTop: 10 * rateHeight,
      paddingHorizontal: 16 * rateWidth,
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
      marginTop: 30 * rateHeight,
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
      fontFamily: 'System',
      fontSize: 14,
      fontWeight: 'normal',
      fontStyle: 'normal',
      lineHeight: 23,
      letterSpacing: 0,
      textAlign: 'left',
      color: '#000000',
    },
  });
  
const mapStateToProps = (state) => ({
  cartProducts: selectors.getCartProducts(state),
});
export default connect(mapStateToProps, {...actions})(PaymentForm)  
