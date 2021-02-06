import React, {useState,Component} from 'react';
// import {connect} from 'react-redux';
import {Animated, TouchableOpacity, View, Text,ScrollView} from 'react-native';
import ProductCartItem from './productCart';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {SwipeListView} from 'react-native-swipe-list-view';
import {StyleSheet} from 'react-native';
import {rateHeight, rateWidth} from './device';
import {connect} from 'react-redux';
import * as selectors from './selectors';
import ButtonCheckout from './checkout'
import * as actions from './actions';
import { DrawerContentScrollView } from '@react-navigation/drawer';

const rowSwipeAnimatedValues = {};

Array(50)
  .fill('')
  .forEach((_, i) => {
    rowSwipeAnimatedValues[`${i}`] = new Animated.Value(0);
  });


class SwipeValueBasedUi extends React.Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }

  closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  favouriteRow = (rowMap, rowKey, data) => {
    this.closeRow(rowMap, rowKey);
    const {favouriteProductFromCart} = this.props;
    favouriteProductFromCart(data);
    alert("Added Wishlist")
  };

  deleteRow = (rowMap, rowKey, data) => {
    this.closeRow(rowMap, rowKey);
    // Remove product from store and database
    // TODO

    // const deletedItem = cartProducts[prevIndex];
    const {deleteProductFromCart} = this.props;
    deleteProductFromCart(data);
  };

  onRowDidOpen = (rowKey) => {
    console.log('This row opened', rowKey);
  };

  onSwipeValueChange = (swipeData) => {
    const {key, value} = swipeData;
    rowSwipeAnimatedValues[key].setValue(Math.abs(value));
  };

  changeAmountProduct = (product, increase) => {
    const {increaseProductAmount, decreaseProductAmount} = this.props;
    if (increase) increaseProductAmount(product);
    else decreaseProductAmount(product);
    // TODO
  };

  renderItem = (data) => {
    console.log("jab product cart ma ay gy",data)
    return (
      <ProductCartItem
        data={data.item}
        changeAmount={this.changeAmountProduct}
      />
    );
  };

  renderHiddenItem = (data, rowMap) => {
    return (
      <View style={styles.rowBack}>
        <TouchableOpacity
          style={[styles.backLeftBtn, styles.backRightBtnLeft]}
           onPress={() => this.favouriteRow(rowMap, data.item.id, data.item)}>
          <AntDesign name="star" size={25} color="white" />
        </TouchableOpacity>
        
           {/* <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnRight]}>
            onPress={() => this.deleteRow(rowMap, data.item.id, data.item)}> */}
          {/* <Animated.View
            style={[
              styles.trash,
              {
                transform: [
                  {
                    scale: rowSwipeAnimatedValues[data.item.id].interpolate({
                      inputRange: [45, 90],
                      outputRange: [0, 1],
                      extrapolate: 'clamp',
                    }),
                  },
                ],
              },
            ]}>
            </Animated.View>
            <AntDesign name="delete" size={25} color="white" />
           
        </TouchableOpacity> */}
            
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnRight]}
          onPress={() => this.deleteRow(rowMap, data.item.id, data.item)}
          >
          <AntDesign name="delete" size={25} color="white" />
         
        </TouchableOpacity> 
      </View>
    );
  };
  render() {
    console.log("cart ke products",this.props.cartProducts)
    const { navigation } = this.props;

    if (this.props.cartProducts.length === 0)
    return (
      <View style={styles.blankView}>
        <Text style={styles.blankText}>{`No product on cart`}</Text>
      </View>
    );
  return (
    <View style={styles.container}>
      <SwipeListView
        data={this.props.cartProducts}
        renderItem={this.renderItem}
        renderHiddenItem={this.renderHiddenItem}
        leftOpenValue={75 * rateWidth}
        rightOpenValue={-75 * rateWidth}
        previewRowKey={'0'}
        previewOpenValue={-40}
        previewOpenDelay={3000}
        // onRowDidOpen={this.onRowDidOpen}
        //  onSwipeValueChange={this.onSwipeValueChange}
      />

        
        <View style={{marginTop:"3%"}}>
         <ButtonCheckout
        data={this.props.cartProducts}
        navigation={navigation.navigate}
         
      />
      </View>
      </View>
     

    );
  }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      flex: 1,
      paddingTop:"2%"
    },
    backTextWhite: {
      color: '#FFF',
    },
    rowFront: {
      alignItems: 'center',
      backgroundColor: '#CCC',
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      justifyContent: 'center',
      height: 118 * rateHeight,
    },
    rowBack: {
      alignItems: 'center',
      backgroundColor: '#DDD',
      flex: 1,
      flexDirection: 'row',
      borderBottomWidth: 8 * rateHeight,
      borderColor: 'white',
      justifyContent: 'space-between',
    },
    backRightBtn: {
      alignItems: 'center',
      bottom: 0,
      justifyContent: 'center',
      position: 'absolute',
      top: 0,
      width: 75,
    },
    backLeftBtn: {
      alignItems: 'center',
      bottom: 0,
      justifyContent: 'center',
      position: 'absolute',
      top: 0,
      width: 75,
    },
    backRightBtnLeft: {
      backgroundColor: '#ffc107',
      left: 0,
    },
    backRightBtnRight: {
      backgroundColor: 'red',
      right: 0,
    },
    trash: {
      height: 25,
      width: 25,
    },
  
    blankView: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    blankText: {
      marginTop: 200,
      fontFamily: 'System',
      fontSize: 14 * rateHeight,
      fontWeight: 'normal',
      fontStyle: 'normal',
      letterSpacing: 0,
      textAlign: 'right',
      color: "black",
    },
  });
  
  const mapStateToProps = (state) => ({
    cartProducts: selectors.getCartProducts(state),
    amount:selectors.getAmount(state)
  });
  
  export default connect(mapStateToProps, actions)(SwipeValueBasedUi);

