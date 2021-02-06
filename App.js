import React from 'react';
import { Image } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import { Block, GalioProvider } from 'galio-framework';
import { NavigationContainer } from '@react-navigation/native';

import Screens from './navigation/Screens';
import { Images, articles, nowTheme } from './constants';

import { Provider } from 'react-redux';
import { ConfigureStore } from './screens/Cart/configureStore';
import * as actions from './screens/MainReducer/actions';
import * as Notifications  from 'expo-notifications';
import {Permissions} from 'expo-permissions';
import axios from 'axios';
const store = ConfigureStore();

// cache app images
const assetImages = [
  Images.Onboarding,
  Images.Logo,
  Images.Pro,
  Images.NowLogo,
  Images.iOSLogo,
  Images.androidLogo,
  Images.ProfilePicture,
  Images.CreativeTimLogo,
  Images.InvisionLogo,
  Images.RegisterBackground,
  Images.ProfileBackground
];

// cache product images
articles.map(article => assetImages.push(article.image));

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

const data = null;

async function WaterReminder(){
  var APIurl = 'https://asankasan-3579c.firebaseio.com/smart_soil_Monitoring.json'
  return await axios.get(APIurl).then(function (res) {
      console.log("WeatherApi_Res: ", res.data);
      if (res.data.Soil < 50) {
          let title = "Water Reminder!"
          let Body = 'Your Crops are getting out of water' + '\n' + 'Hurry! give them water'
          Notifications.scheduleNotificationAsync({
              content: {
                title: title,
                body: Body
              },
              trigger: {
                seconds: 180,
                repeats:true
              },
            });  
      }
      else{
        console.log('crops are fresh');
      }
    }).catch(function (error){
        console.log("error fetching API: ",error)
    })
  }
      
            

async function WeatherAPI(){
  var APIUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Islamabad&appid=f6799e61d54b2d98ef79e0c9c5a5fbd2';
  await axios.get(APIUrl).then(function(res){
    console.log(res.data)
    const humidity = res.data.main.humidity;
    const temperature = parseInt(res.data.main.temp - 273);
    const max_temperature =parseInt(res.data.main.temp_max - 273);
    const min_temperature = parseInt(res.data.main.temp_min - 273);
    const city = 'Islamabad';
    const description =res.data.weather[0].description; 
    var Body = temperature+'° '+city+' | '+description+'\n'+'High'+' '+max_temperature+'°'+" | "+'Low'+' '+min_temperature+'°'+
                '\n'+"Humidity "+humidity+'°';
    console.log("body: ",Body)
    Notifications.scheduleNotificationAsync({
      content: {
        title: "Weather Alert",
        body: Body
      },
      trigger: {
        seconds: 180,
        repeats:true
      },
    });
    return Body
  }).catch(function (error){
    console.log("error")
    return error
  })
  
}

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});



export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
    fontLoaded: false
  };

async componentDidMount() {
  await store.dispatch(actions.getAllProducts())
  await WeatherAPI()
  await WaterReminder()
  // let result = await   
  // Permissions.askAsync(Permissions.NOTIFICATIONS);
  // if (Constants.lisDevice && resut.status === 'granted') {
  //  console.log('Notification permissions granted.')
  // }
}

  // async componentDidMount() {
  //   Font.loadAsync({
  //     'montserrat-regular': require('./assets/font/Montserrat-Regular.ttf'),
  //     'montserrat-bold': require('./assets/font/Montserrat-Bold.ttf')
  //   });

  //   this.setState({ fontLoaded: true });
  // }

  render() {
    if (!this.state.isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <Provider store={store}>
          <NavigationContainer>
            <GalioProvider theme={nowTheme}>
              <Block flex>
                <Screens />
              </Block>
            </GalioProvider>
          </NavigationContainer>
        </Provider>
      );
    }
  }

  _loadResourcesAsync = async () => {
    await Font.loadAsync({
      'montserrat-regular': require('./assets/font/Montserrat-Regular.ttf'),
      'montserrat-bold': require('./assets/font/Montserrat-Bold.ttf')
    });

    this.setState({ fontLoaded: true });
    return Promise.all([...cacheImages(assetImages)]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    if (this.state.fontLoaded) {
      this.setState({ isLoadingComplete: true });
    }
  };
}
