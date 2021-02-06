import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
import styles from './styles';
import * as selectors from './selectors';
import {connect} from 'react-redux';
class OrderProcess extends Component {
  constructor() {
    super();
    this.data = [
      {
        time: '20/18\n09:00 AM',
        title: 'Order Signed',
        description: 'SHL, Islamabad',
        circleColor: '#00c569',
        lineColor: '#00c569',
      },
      {
        time: '20/18\n09:30 AM',
        circleColor: '#00c569',
        lineColor: '#00c569',
        title: 'Order Processed',
        description: 'Dwh warehouse Islamabad',
      },
      {
        time: '20/18\n10:00 AM',
        title: 'Shipped ',
        circleColor: '#00c569',
        lineColor: '#F0F0F0',
        description: 'Ptv colony islamabad',
      },
      {
        time: '20/18\n10:10 AM',
        title: 'Out for delivery',
        description: 'Defence,Karachi',
        lineColor: '#F0F0F0',
        circleColor: '#F0F0F0',
      },
      {
        time: '20/18\n10:20 AM',
        title: 'Delivered',
        description: 'Gulsan iqbal block 4,Karachi',
        lineColor: '#F0F0F0',
        circleColor: '#F0F0F0',
      },
  ];     
  
  }

  render() {
    return (
      <View style={styles.bodyContent}>
        <Timeline
          style={styles.list}
          data={this.data}
          separator={true}
          circleSize={20}
          circleColor="rgb(45,156,219)"
          lineColor="rgb(45,156,219)"
          timeContainerStyle={{minWidth: 52, marginTop: 0}}
          timeStyle={{
            textAlign: 'center',
            backgroundColor: '#ff9797',
            color: 'white',
            padding: 5,
            borderRadius: 13,
            overflow: 'hidden',
          }}
          descriptionStyle={{color: 'gray'}}
          options={{
            style: {paddingTop: 5},
          }}
        />
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
    orderTrack: selectors.getOrderTrack(state),
  });
  export default connect(mapStateToProps, {})(OrderProcess);