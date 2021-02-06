import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';
import {rateHeight, rateWidth} from './device';
import { ConfigureStore } from './configureStore';
import * as actions from './actions';

const store = ConfigureStore();
var Total = null

class ButtonCheckout extends React.Component {
  constructor(props){ 
    super(props);
    this.state={
      total:null
    }
  }

  totalPrice = () => {
    const {data} = this.props;
    let total = 0;
    data.forEach((element) => {
      total += element.productPrice *  element.productQuantity;
      store.dispatch(actions.OrderTotal(total))
    Total=total
    });
    return total;
  };
   render() {
    const {leftView, rightView} = styles;
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={leftView}>
          <Text style={styles.textStyle}>{`TOTAL`}</Text>
          <Text style={styles.priceText}>{`${this.totalPrice()} Rupees`}</Text>
        </View>
        <TouchableOpacity
          style={rightView}
          >
          <View style={styles.buttonView}>
            <Text style={styles.textButton}
             onPress={() => navigation('Checkout',{data:Total})}
            >{`CHECKOUT`}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-start',
      marginTop: -60 ,
      flexDirection: 'row',
    },
  
    leftView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-start',
      paddingLeft: 30 * rateWidth,
    },
  
    rightView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    buttonView: {
      width: 146,
      height: 50,
      justifyContent: 'center',
      borderRadius: 4,
      backgroundColor: '#00c569',
    },
  
    textStyle: {
      fontFamily: 'System',
      fontSize: 12,
      fontWeight: 'normal',
      fontStyle: 'normal',
      letterSpacing: 0,
      textAlign: 'left',
      color: '#929292',
    },
  
    priceText: {
      fontFamily: 'System',
      fontSize: 18,
      fontWeight: 'bold',
      fontStyle: 'normal',
      lineHeight: 21,
      letterSpacing: 0,
      textAlign: 'left',
      color: '#00c569',
    },
  
    textButton: {
      fontFamily: 'System',
      fontSize: 14,
      fontWeight: 'normal',
      fontStyle: 'normal',
      lineHeight: 16,
      letterSpacing: 0,
      textAlign: 'center',
      color: '#ffffff',
    },
  });


export default ButtonCheckout;
