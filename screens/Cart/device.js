import {Dimensions, Platform} from 'react-native';
// import DeviceInfo from 'react-native-device-info';
// import * as IphoneModel from 'constants/deviceModel';

const designeWidth = 375;
const designeHeight = 667;

const designeHeightX = 812;

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;

// export const isDeviceIphoneX = () => {
//   const deviceModel = DeviceInfo.getModel();
//   if (Platform.OS === 'ios' && IphoneModel.IPHONE_X.includes(deviceModel)) {
//     return true;
//   }
//   return false;
// };

const designHeightConvert =  designeHeightX ;
export const rateWidth = deviceWidth / designeWidth;
export const rateHeight = deviceHeight / designHeightConvert;
