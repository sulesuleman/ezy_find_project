import React,{Component} from 'react';
import moment from 'moment';
import ImageOrderItem from './imageitem'
import {Image, View, TouchableOpacity, Text, Animated} from 'react-native';
import styles from './styles';



class OrderItem extends React.Component {
   render() {
    const {containeror} = styles;
    const {data} = this.props;
console.log("jj",data)
    const showDate = moment.unix(data.created_at).format('MM/DD/YYYY');
    const statusStyle =
      data.status === 'Delivered'
        ? styles.orderStatusFinish
        : styles.orderStatusDeliver;
    return (
      <View style={containeror}>
        <Text style={styles.dateText}>{showDate}</Text>
        <View style={styles.orderItemBox}>
          <View style={styles.orderContentView}>
            <Text style={styles.orderNameText}>{data.order_name}</Text>
            <Text style={styles.orderPriceText}>{`${data.price} $`}</Text>
            <TouchableOpacity
              style={statusStyle}
              onPress={() => this.props.actionClick(data)}>
              <Text style={styles.statusText}>{data.status}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.orderImageView}>
            <ImageOrderItem products={data.products} />
          </View>
        </View>
      </View>
    );
  }
}

export default OrderItem;
