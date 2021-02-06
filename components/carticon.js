import React,{Component} from 'react';
import {Text, View, TouchableOpacity, Animated} from 'react-native';
import {StyleSheet} from 'react-native';
import {rateHeight, rateWidth} from '../screens/Cart/device';
import {Avatar, Badge, Icon, withBadge} from 'react-native-elements';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {connect} from 'react-redux';
import * as selectors from '../screens/Cart/selectors';

class CartIcon extends React.Component {
//    springValue: Animated.Value;
    constructor(props) {
        super(props);
  //      this.springValue = new Animated.Value(1);
  }

  _getTotalProducts = () => {
    const {cartProducts} = this.props;
    let total = 0;
    cartProducts.forEach((item) => {
      total += parseInt(item.productQuantity);
    });
    return total;
  };

//   _springAnimation = () => {
//     this.springValue.setValue(0.5);
//     Animated.spring(this.springValue).start();
//   }

  componentDidUpdate = () => {
    // this._springAnimation();
  };
  render() {
    const {container, leftView, centerView, rightView} = styles;
    const {titleText} = styles;
    
    return(
      <TouchableOpacity style={styles.buttonView} onPress={() => this.props.navigation.navigate('Cart')}>
        <Badge status="success"   value={this._getTotalProducts()} />
        <MaterialIcons
          name={'shopping-cart'}
          color={'#00C569'}
          size={30 * rateHeight}
        />
        {/* <Animated.View
          style={{
            position: 'absolute',
            top: -4,
            right: -4,
            transform: [
              {
                scale: this.springValue,
              },
            ],
          }}>
          
        </Animated.View> */}
        
      </TouchableOpacity>
        ) 
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 100 * rateHeight,
    justifyContent: 'center',
    paddingTop: 40 * rateHeight,
  },

  leftView: {
    flex: 2,
    justifyContent: 'center',
    paddingLeft: 15 * rateWidth,
  },

  centerView: {
    flex: 6,
    justifyContent: 'center',
  },

  rightView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleText: {
    fontFamily: 'System',
    fontSize: 20 * rateHeight,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 24 * rateHeight,
    letterSpacing: 0,
    textAlign: 'center',
    color: "black",
  },

  buttonView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40 * rateWidth,
    height: 40 * rateWidth,
    borderRadius: 45,
    backgroundColor: 'white',
  },
});


const mapStateToProps = (state) => ({
    cartProducts: selectors.getCartProducts(state),
  });
  
  export default connect(mapStateToProps, {})(CartIcon);