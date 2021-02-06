import React,{Component} from 'react';
import {Text, View, FlatList} from 'react-native';
import OrderItem from './orderitem';
import {connect} from 'react-redux';
import {orders} from './order';
import styles from './styles';
import * as selectors from './selectors';
import * as actions from './actions';
class TrackOrder extends React.Component{
  showOrderStatusProcess = (data) => {
    const {navigation} = this.props;
    const {getOrderTrack} = this.props;

    getOrderTrack(data);

 
    navigation.navigate('Track Details');
   
  };
   render() {
    return (
      <View style={styles.container}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={orders}
          renderItem={({item: rowData}) => {
            return (
              <OrderItem
                data={rowData}
                actionClick={this.showOrderStatusProcess}
              />
            );
          }}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
    orderTrack: selectors.getOrderTrack(state),
  });
  export default connect(mapStateToProps, {...actions})(TrackOrder);
