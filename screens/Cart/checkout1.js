import React from 'react';
import {rateHeight, rateWidth} from './device';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import {CheckBox} from 'react-native-elements';
import CheckoutStep  from './checkstep';
import * as selectors from './selectors';
import * as actions from './actions';
import {connect} from 'react-redux';
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }

  backClick = () => {
    const {navigation} = this.props;
    navigation.goBack();
  };

  

  nextAction = () => {
    const {navigation} = this.props;
    console.log("props checkout1: ",this.props.route.params.data)
    navigation.navigate('Address',{data:this.props.route.params.data});
  };


   render() {
    const bottomProps = {
      isShowLeftButton: false,
      textLeftButton: 'BACK',
      textRightButton: 'NEXT',
      actionLeftClick: () => {},
      actionRightClick: this.nextAction,
    };
    // console.log(this.props);
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
            <View style={styles.circleNormal1}>
              {/* <View style={styles.circle2}></View> */}
            </View>
            <Text style={styles.graphicTextNormal}>{`Address`}</Text>
          </View>
          <View style={styles.graphic}>
            <View style={styles.circleNormal1}>
              {/* <View style={styles.circle2}></View> */}
            </View>
            <Text style={styles.graphicTextNormal}>{`Payments`}</Text>
          </View>
        </View>
        <View style={styles.contentView}>
          {/* case1 */}
          <View style={styles.view}>
            <Text style={styles.titleText}>{`Credit Card`}</Text>
            <View style={styles.rowView}>
              <View style={{flex: 5}}>
                <Text
                  style={
                    styles.contentText
                  }>{`Order will be delivered between 3 - 5 business days`}</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'flex-end',
                }}>
                <CheckBox
                  checkedColor="#00c569"
                  iconRight
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  checked={this.props.deliveryCase === 1}
                  onPress={() => this.props.settingDeliveryPayment(1)}
                />
              </View>
              
            </View>
       
          </View>
          <View style={styles.view}>
            <Text style={styles.titleText}>{`Cash On Delivery`}</Text>
            <View style={styles.rowView}>
              <View style={{flex: 5}}>
                <Text
                  style={
                    styles.contentText
                  }>{`Order will be delivered between 3 - 5 business days`}</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'flex-end',
                }}>
                <CheckBox
                  checkedColor="#00c569"
                  iconRight
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  checked={this.props.deliveryCase === 2}
                  onPress={() => this.props.settingDeliveryPayment(2)}
                />
              </View>
              
            </View>
       
          </View>
          
          
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
      flex: 1,
      paddingTop: 20,
      flexDirection: 'row',
      // backgroundColor: 'red',
    },
  
    contentView: {
      flex: 3,
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
      flex: 1,
      paddingHorizontal: 16 * rateWidth,
    },
    rowView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
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
  deliveryCase: selectors.getDeliveryCase(state),
  cartProducts: selectors.getCartProducts(state),
});
export default connect(mapStateToProps, {...actions})(Form);
