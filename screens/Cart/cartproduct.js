import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
  StyleSheet
} from 'react-native';
import {rateHeight, rateWidth} from './device';

// interface Product {
//   image: ImageSourcePropType;
//   product_name: string;
//   brand: string;
//   cost: number;
// }

// /interface Props {
//   data: Product;
//   actionClick: (data: Product) => void;
// }

class Product extends React.Component {
   render() {
    const {buttonView} = styles;
    const {data} = this.props;
    const subName =
      data.productName.length > 14
        ? `${data.productName.substring(0, 12)}...`
        : data.productName;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => this.props.actionClick(data)}>
        <View style={buttonView}>
          <Image source={{uri:data.productPicture}} style={styles.buttonImage} />
        </View>
        <Text style={styles.productNameText}>{subName}</Text>

        <Text style={styles.productCostText}>{`${data.productPrice} Rupees`}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 7 * rateWidth,
    },
  
    buttonView: {
      borderRadius: 4,
    },
  
    buttonImage: {
      width: 120,
      height: 120,
      borderRadius: 5,
    },
  
    productNameText: {
      width: 120 * rateWidth,
      fontFamily: 'System',
      fontSize: 16 * rateWidth,
      fontWeight: '500',
      fontStyle: 'normal',
      letterSpacing: 0,
      textAlign: 'left',
      color: 'black',
    },
  
    productCostText: {
      width: 120 * rateWidth,
      marginTop: 5 * rateHeight,
      fontFamily: 'System',
      fontSize: 16 * rateHeight,
      fontWeight: '500',
      fontStyle: 'normal',
      letterSpacing: 0,
      textAlign: 'left',
      color: '#00c569',
    },
  });
  
  
export default Product;
