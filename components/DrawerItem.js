import React from "react";
import { StyleSheet, Image, TouchableOpacity, AsyncStorage, Linking } from "react-native";
import { Block, Text, theme } from "galio-framework";

import Icon from "./Icon";
import nowTheme from "../constants/Theme";
// import axiosInstance from '../APIs/axiosApi';
class DrawerItem extends React.Component {

  renderIcon = () => {
    const { title, focused } = this.props;

    switch (title) {
      case "Request an Item":
        return (
          // <Icon
          //   name=""
          //   family="Font-Awesome"
          //   size={24}
          //   color={focused ? nowTheme.COLORS.WHITE : "#c70039"}
          // // style={{ opacity: 0.5 }}
          // />
          <Image
            source={require('../assets/icons/Cropping/side_1.png')}
            style={{position:'absolute',height:'80%', resizeMode:"center"}}
          />
        );
      case "Buy":
        return (
          <Icon
            name="shopping-cart"
            family="Font-Awesome"
            size={24}
            color={focused ? nowTheme.COLORS.WHITE : "#c70039"}
          // style={{ opacity: 0.5 }}
          />
        );
      case "Bid": 
        return (
          // <Icon
          //   name="legal"
          //   family="Font-Awesome"
          //   size={24}
          //   color={focused ? nowTheme.COLORS.WHITE : "#c70039"}
          // // style={{ opacity: 0.5 }}
          // />
          <Image
            source={require('../assets/icons/Cropping/bid.png')}
            style={{position:'absolute',height:'80%', resizeMode:"center"}}
          />
        );
      case "Hire":
        return (
          <Image
          source={require('../assets/icons/Cropping/time.png')}
          style={{position:'absolute',height:'80%', resizeMode:"center"}}
        />
        );
      case "Find Business":
        return (
          <Icon
            name="search"
            family="Font-Awesome"
            size={24}
            color={focused ? nowTheme.COLORS.WHITE : "#c70039"}
          // style={{ opacity: 0.5 }}
          />
        );

      case "Specials":
        return (
          <Icon
            name="star"
            family="Font-Awesome"
            size={24}
            color={focused ? nowTheme.COLORS.WHITE : "#c70039"}
          // style={{ opacity: 0.5 }}

          />
        );
      case "Catalogue":
        return (
          // <Icon
          //   name=""
          //   family=""
          //   size={24}
          //   color={focused ? nowTheme.COLORS.WHITE : "#c70039"}
          // // style={{ opacity: 0.5 }}
          // />
          <Image
            source={require('../assets/icons/Cropping/list.png')}
            style={{position:'absolute',height:'80%', resizeMode:"center"}}
          />
        );

      case "Special Maps":
        return (
          <Icon
            name="map-marker"
            family="Font-Awesome"
            size={24}
            color={focused ? nowTheme.COLORS.WHITE : "#c70039"}
          // style={{ opacity: 0.5 }}
          />
        );
      case "Categories":
        return (
          <Icon
            name="list"
            family="Font-Awesome"
            size={24}
            color={focused ? nowTheme.COLORS.WHITE : "#c70039"}
          // style={{ opacity: 0.5 }}
          />
        );
      case "My Favourites":
        return (
          <Icon
            name="heart"
            family="Font-Awesome"
            size={24}
            color={focused ? nowTheme.COLORS.WHITE : "#c70039"}
          // style={{ opacity: 0.5 }}
          />
        );
      case "My Reviews":
        return (
          <Image
            source={require('../assets/icons/Cropping/list02.png')}
            style={{position:'absolute',height:'80%', resizeMode:"center"}}
          />
        );
      case "Rate the App":
        return (
          <Image
            source={require('../assets/icons/Cropping/star-chat.png')}
            style={{position:'absolute',resizeMode:"center"}}
          />
        );
      case "Share the App":
        return (
          <Image
            source={require('../assets/icons/Cropping/share.png')}
            style={{position:'absolute',height:'80%', resizeMode:"center"}}
          />
        );
      case "Give FeedBack":
        return (
          <Image
          source={require('../assets/icons/Cropping/feedback.png')}
          style={{position:'absolute',height:'80%', resizeMode:"center"}}
        />
        );

      case "GETTING STARTED":
        return (
          <Icon
            name="spaceship2x"
            family="NowExtra"
            size={24}
            style={{ borderColor: "rgba(0,0,0,0.5)" }}
            color={focused ? nowTheme.COLORS.WHITE : "#c70039"}
          />
        );
      case "SIGN OUT":
        return (
          <Image
            source={require('../assets/icons/Cropping/logout.png')}
            style={{position:'absolute',height:'80%', resizeMode:"center"}}
          />
        );
      case "SIGN IN":
        return (
          <Icon
            name="share"
            family="NowExtra"
            size={24}
            style={{ borderColor: "rgba(0,0,0,0.5)", }}
            color={focused ? nowTheme.COLORS.WHITE : "#c70039"}
          />
        );
      default:
        return null;
    }
  };

  render() {
    const { focused, title, navigation } = this.props;

    const containerStyles = [
      styles.defaultStyle,
      focused ? [styles.activeStyle, styles.shadow] : null
    ];

    return (
      <TouchableOpacity
        style={{ height: 60 }}
        onPress={async () =>
          title == 'SIGN OUT' ?
            navigation.navigate('Onboarding')
            :
            navigation.navigate(title)
        }>
        <Block flex row style={containerStyles}>
          <Block middle flex={0.2} style={{ marginRight: 5 }}>
            {this.renderIcon()}
          </Block>
          <Block row center flex={0.9}>
            <Text
              style={{
                // fontFamily: "montserrat-regular",
                textTransform: "uppercase",
                fontWeight: "300"
              }}
              size={12}
              bold={focused ? true : false}
              color={focused ? nowTheme.COLORS.WHITE : "black"}
            >
              {title}
            </Text>
          </Block>
        </Block>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  defaultStyle: {
    paddingVertical: 15,
    paddingHorizontal: 14,
    color: "white"
  },
  activeStyle: {
    backgroundColor: '#c70039',
    borderRadius: 30,
    color: "#c70039"
  },
  shadow: {
    shadowColor: theme.COLORS.GOOGLE,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 0.1
  }
});

export default DrawerItem;
