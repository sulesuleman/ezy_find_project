import React from 'react';
import {Image, View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {rateHeight, rateWidth} from './device';

class ProductCartItem extends React.Component {
  constructor(props){
    super(props);
    this.state={
      amount: this.props.data.productQuantity - this.props.data.productQuantity + 1
    }
  }

   render() {
    return (
      <View
        style={styles.container}
        // onPress={() => this.props.actionClick(this.props.data)}
      >
        <View style={styles.productImageView}>
          <Image source={{uri:this.props.data.productPicture}}
           style={styles.productImage} />
        </View>
        <View style={styles.productContentView}>
          <Text style={styles.productNameText}>
            {this.props.data.productName}
          </Text>
          <Text style={styles.costText}>
              {`${this.props.data.productPrice} Rupees`}
              
              </Text>
          <View style={styles.productAmountView}>
            <TouchableOpacity
              style={styles.addView}
              onPress={() => this.props.changeAmount(this.props.data, false)} >
              <Text style={styles.amountText}>{`-`}</Text>
            </TouchableOpacity>
            <View>
              <Text
                 style={styles.amountText}>{`${this.props.data.productQuantity }`}
                </Text>
            </View>
            <TouchableOpacity
              style={styles.addView}
              onPress={() => this.props.changeAmount(this.props.data, true)}>
              <Text style={styles.amountText}>{`+`}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      height: 120 * rateWidth,
      borderBottomWidth: 8 * rateHeight,
      borderColor: 'white',
      backgroundColor: 'white',
    },
  
    productImageView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    productImage: {
      width: 110 * rateWidth,
      height: 110 * rateWidth,
      borderRadius: 4,
    },
    // right
    productContentView: {
      flex: 1.5,
      justifyContent: 'center',
      alignItems: 'flex-start',
      flexDirection: 'column',
    },
  
    productNameText: {
      fontFamily: 'System',
      fontSize: 16,
      fontWeight: 'bold',
      fontStyle: 'normal',
      letterSpacing: 0,
      textAlign: 'left',
      color: "black",
    },
  
    costText: {
      marginTop: 5,
      fontFamily: 'System',
      fontSize: 16,
      fontWeight: '500',
      fontStyle: 'normal',
      lineHeight: 19,
      letterSpacing: 0,
      textAlign: 'left',
      color: '#00c569',
    },
  
    productAmountView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10 * rateHeight,
      // paddingHorizontal: 15 * rateWidth,
      alignItems: 'center',
      width: 95 * rateWidth,
      height: 30 * rateHeight,
      borderRadius: 4,
      backgroundColor: 'rgba(0, 0, 0, 0.06)',
    },
  
    subView: {
      justifyContent: 'center',
    },
    addView: {justifyContent: 'center', flex: 1},
    amountText: {
      fontFamily: 'System',
      fontSize: 16 * rateHeight,
      fontWeight: 'normal',
      fontStyle: 'normal',
      letterSpacing: 0,
      textAlign: 'center',
      color: 'black',
    },
  });
  
  
export default ProductCartItem;
