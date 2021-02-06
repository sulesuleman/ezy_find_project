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



class CheckStep1 extends React.Component {
    constructor(props){
        super(props);
        this.state={
            isShowLeftButton:true
        }
    }
   render() {
    const {leftView, rightView} = styles;
    const {navigation} = this.props;
    const LeftView = this.state.isShowLeftButton ? (
      <TouchableOpacity
        style={leftView}
        onPress={() => this.props.actionLeftClick()}>
        <View style={styles.buttonLeftView}>
          <Text style={styles.textLeftButton}>Back</Text>
        </View>
      </TouchableOpacity>
    ) : (
      <View style={styles.leftView} />
    );
    return (
      <View style={styles.container}>
        {LeftView}
        <TouchableOpacity
          style={rightView}
          onPress={() =>navigation('Payment')}
          >
          <View style={styles.buttonRightView}>
            <Text style={styles.textButton}>Next</Text>
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
    marginTop: -70 ,
      flexDirection: 'row',
    },
  
    leftView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    rightView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    buttonLeftView: {
      width: 146,
      height: 50,
      justifyContent: 'center',
      borderRadius: 4,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: '#00c569',
    },
  
    buttonRightView: {
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
  
    textLeftButton: {
      fontFamily: 'System',
      fontSize: 14,
      fontWeight: 'normal',
      fontStyle: 'normal',
      lineHeight: 16,
      letterSpacing: 0,
      textAlign: 'center',
      color: 'black',
    },
  });
  
export default CheckStep1;
