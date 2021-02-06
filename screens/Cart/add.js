import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from 'react-native';

import {rateHeight, rateWidth} from './device';


class Main extends React.Component {
   render() {
    const {leftView, rightView} = styles;
    const {data} = this.props;
    return (
      <View style={styles.container}>
        <View style={leftView}>
          <Text style={styles.textStyle}>{`PRICE`}</Text>
          <Text style={styles.priceText}>{`${data.cost}$`}</Text>
        </View>
        <TouchableOpacity
          style={rightView}
          onPress={() => this.props.actionClick()}>
          <View style={styles.buttonView}>
            <Text style={styles.textButton}>{`ADD`}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
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
  
export default Main;
