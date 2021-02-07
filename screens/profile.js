import React, { Component } from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from 'react-native';
import { Block, Text, theme } from 'galio-framework';
import { Button, Icon } from '../components';
import { Switch } from "../components";
import { nowTheme, Images } from '../constants';
import { ScrollView } from "react-native-gesture-handler";
import Theme from "../constants/Theme";


const { width, height } = Dimensions.get('screen');
const thumbMeasure = (width - 48 + 190) / 3;

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>{children}</TouchableWithoutFeedback>
);

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      profile: [],
      isLoading: false,
      opacity: 1
    }
  }

  onEditButtonClick = () => {
    this.setState({
      opacity: 0.5
    })
    this.props.navigation.navigate('changePassword')
  }

  renderItem = ({ item }) => {
    const { navigate } = this.props.navigation;

    switch (item.type) {
      case "switch":
        return (
          <Block row middle space="between" style={styles.rows}>
            <Text style={{ fontFamily: 'montserrat-regular' }} size={14} color="#525F7F">{item.title}</Text>
            <Switch
              onValueChange={() => this.toggleSwitch(item.id)}
              value={this.state[item.id]}
            />
          </Block>
        );
      case "button":
        return (
          <Block style={styles.rows}>
            <TouchableOpacity onPress={() => navigate(item.id)}>
              <Block row middle space="between" style={{ paddingTop: 7 }}>
                <Text style={{ fontFamily: 'montserrat-regular' }} size={14} color="#525F7F">{item.title}</Text>
                <Icon
                  name="angle-right"
                  family="font-awesome"
                  style={{ paddingRight: 5 }}
                />
              </Block>
            </TouchableOpacity>
          </Block>
        );
      default:
        break;
    }
  };

  render() {
    const recommended = [
      { title: "Username,Address,Category", id: "face", type: "button" },

    ];
    const payment = [

      { title: "Language", id: "language", type: "button" },
      { title: "Notifications", id: "NotificationsSettings", type: "button" }
    ];

    const privacy = [
      { title: "FAQ", id: "Faq", type: "button" },
      { title: "App Rating", id: "Privacy", type: "button" },
      { title: "About Us", id: "About", type: "button" }
    ];

    return (

      <DismissKeyboard>
        <Block flex middle style={{ backgroundColor: '#c70039' }}>
          <Block flex >
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: width * 1.3 / 3,
                height: height / 17,
                backgroundColor: 'white',
                position: 'absolute',
                borderRadius: 15,
                top: theme.SIZES.BASE / 3 + 60,
                left: width * 0,
                elevation: 10,
                zIndex: 5,
                opacity: this.state.opacity,
                shadowColor: 'white',
                shadowOpacity: 5
              }}
              onPress={this.onEditButtonClick}>
              <Text style={{ fontWeight: 'bold', color: 'maroon' }}>
                Edit Profile
              </Text>
            </TouchableOpacity>

            <Block style={styles.settingContainer}>
              <Block row style={{ position: 'absolute', width: width, zIndex: 5, paddingHorizontal: 0 }}>
                <Block middle
                  style={{
                    top: theme.SIZES.BASE / 3 - 100, left: width * 0.46,
                    borderRadius: 110, borderWidth: 5, borderColor: 'pink'
                  }}
                >
                  <Image
                    source={Images.ProfilePicture}
                    style={styles.avatar}
                  />
                </Block>
              </Block>
              <Block middle flex={0.1} style={{ top: theme.SIZES.BASE / 2 + 20, width: '50%', paddingHorizontal: '5%' }}>
                <Text
                  style={{
                    fontFamily: 'montserrat-bold',
                    color: '#c70039',
                    fontSize: 16
                  }}
                >
                  JOHN DOE
                  </Text>
              </Block>
              <Block style={{ top: theme.SIZES.BASE / 2 + 50, left: theme.SIZES.BASE / 1, borderWidth: 1, borderColor: "pink", height: '0%', width: '50%', position: 'relative' }}>
              </Block>
              <Block flex={1} space='evenly' style={{
                paddingVertical: "10%",
                paddingHorizontal: '5%',
                marginTop: 20
              }}>

                <Block flex={2.5} style={styles.title}>
                  <Text style={{color:'#c70039', fontFamily: 'montserrat-bold', paddingBottom: 5 }} size={theme.SIZES.BASE} color={nowTheme.COLORS.TEXT}>
                    Gender
                  </Text>
                  <Text style={{fontSize:16}} >Male</Text>
                </Block>

                <Block flex={2.5} style={styles.title}>
                  <Text style={{color:'#c70039', fontFamily: 'montserrat-bold', paddingBottom: 5 }} size={theme.SIZES.BASE} color={nowTheme.COLORS.TEXT}>
                    Date of birth
                  </Text>
                  <Text style={{fontSize:16}} >03 / 11 / 1997 </Text>
                </Block>

                <Block flex={2.5} style={styles.title}>
                  <Text style={{color:'#c70039', fontFamily: 'montserrat-bold', paddingBottom: 5 }} size={theme.SIZES.BASE} color={nowTheme.COLORS.TEXT}>
                    Account Info
                  </Text>
                  <Text style={{fontSize:16}} >JohnDoe@ezyfind.co.za</Text>
                </Block>

                <Block flex={2.5} style={styles.title}>
                  <Text style={{color:'#c70039', fontFamily: 'montserrat-bold', paddingBottom: 5 }} size={theme.SIZES.BASE} color={nowTheme.COLORS.TEXT}>
                    Address Info
                  </Text>
                  <Text style={{fontSize:16}}>12 Simmonds St. Guateng City of Johannesburg Metropolitan Muncipal 2000</Text>
                </Block>


              </Block>

            </Block>

          </Block>
        </Block>
      </DismissKeyboard>
    );

  }
}
const styles = StyleSheet.create({
  createButton: {
    width: width * 0.6,
    marginTop: 25,
    marginBottom: 40
  },
  inputIcons: {
    marginRight: 12,
    color: nowTheme.COLORS.ICON_INPUT
  },
  settings: {
    paddingVertical: theme.SIZES.BASE / 3
  },
  title: {
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE / 2
  },
  rows: {
    height: theme.SIZES.BASE * 2,
    paddingHorizontal: theme.SIZES.BASE + 4,
    marginBottom: theme.SIZES.BASE / 1
  },
  settingContainer: {
    marginTop: "30%",
    width: width * 3 / 3.2,
    height: height / 1.6,
    backgroundColor: nowTheme.COLORS.WHITE,
    borderRadius: 30,
    shadowColor: nowTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 3,

  },
  avatar: {
    width: thumbMeasure,
    height: thumbMeasure,
    borderRadius: 50,
    borderWidth: 0
  }
});

export default Profile;