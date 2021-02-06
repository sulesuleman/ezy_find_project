import {StyleSheet} from 'react-native';

import {rateHeight, rateWidth} from '../Cart/device';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#F0F0F0',
  },
  containeror: {
    marginVertical: 10 * rateHeight,
    height: 172 * rateHeight,
    paddingHorizontal: 16 * rateWidth,
  },
 
  dateText: {
    fontFamily: 'System',
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 16,
    letterSpacing: 0,
    textAlign: 'left',
    color: 'rgba(0, 0, 0, 0.6)',
  },
  orderItemBox: {
    marginTop: 16 * rateHeight,
    flexDirection: 'row',
    height: 140 * rateHeight,
    borderRadius: 4,
    backgroundColor: '#ffffff',
    shadowColor: 'rgba(36, 36, 36, 0.05)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 15,
    shadowOpacity: 1,
  },

  orderContentView: {
    flex: 1,
    paddingVertical: 20 * rateHeight,
    paddingLeft: 20 * rateWidth,
  },
  orderImageView: {
    flex: 1,
  },

  orderNameText: {
    fontFamily: 'System',
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#000000',
  },

  orderPriceText: {
    marginTop: 10 * rateHeight,
    fontFamily: 'System',
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 16,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#00c569',
  },

  orderStatusFinish: {
    marginTop: 28 * rateHeight,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 30,
    borderRadius: 2,
    backgroundColor: '#00c569',
  },

  orderStatusDeliver: {
    marginTop: 28 * rateHeight,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 30,
    borderRadius: 2,
    backgroundColor: '#ffb900',
  },

  statusText: {
    fontFamily: 'System',
    fontSize: 14,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 16,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ffffff',
  },
  containerpro: {
    // flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F0F0F0',
  },

  bodyContent: {
    flex: 1,
    padding: 20,
  },

  list: {
    flex: 1,
    marginTop: 20,
  },
  containerimage: {
    height: 140 * rateHeight,
    paddingVertical: 20 * rateHeight,
    paddingHorizontal: 15,
  },

  moreView: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 4,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#e1e1e1',
  },
  moreText: {
    fontFamily: 'System',
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 16,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#000000',
  },
  image: {
    width: 50,
    height: 50,
    margin: 2,
    borderRadius: 4,
  },

});


export default styles;
