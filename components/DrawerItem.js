import React from "react";
import { StyleSheet, TouchableOpacity, AsyncStorage, Linking } from "react-native";
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
          <Icon
            name=""
            family="Font-Awesome"
            size={20}
            color={focused ? nowTheme.COLORS.WHITE : "#c70039"}
            style={{ opacity: 0.5 }}
          />
        );
      case "Buy":
        return (
          <Icon
            name="shopping-cart"
            family="Font-Awesome"
            size={20}
            color={focused ? nowTheme.COLORS.WHITE : "#c70039"}
            style={{ opacity: 0.5 }}
          />
        );
      case "Bid":
        return (
          <Icon
            name="app2x"
            family="NowExtra"

            size={20}
            color={focused ? nowTheme.COLORS.WHITE : "#c70039"}
            style={{ opacity: 0.5 }}
          />
        );
      case "Hire":
        return (
          <Icon
            name="clock"
            family="Font-Awesome"
            size={20}
            color={focused ? nowTheme.COLORS.WHITE : "#c70039"}
            style={{ opacity: 0.5 }}
          />
        );
      case "Find Business":
        return (
          <Icon
            name="pagelines"
            family="Font-Awesome"
            size={20}
            color={focused ? nowTheme.COLORS.WHITE : "#c70039"}
            style={{ opacity: 0.5 }}
          />
        );

      case "Specials":
        return (
          <Icon
            name="star"
            family="Font-Awesome"
            size={20}
            color={focused ? nowTheme.COLORS.WHITE : "#c70039"}
            style={{ opacity: 0.5 }}
            
          />
        );
      case "Catalogue":
        return (
          <Icon
            name="basket2x"
            family="NowExtra"
            size={20}
            color={focused ? nowTheme.COLORS.WHITE : "#c70039"}
            style={{ opacity: 0.5 }}
          />
        );

      case "Special Maps":
        return (
          <Icon
            name="star"
            family="Font-Awesome"
            size={20}
            color={focused ? nowTheme.COLORS.WHITE : "#c70039"}
            style={{ opacity: 0.5 }}
          />
        );
      case "Categories":
        return (
          <Icon
            name="comments"
            family="Font-Awesome"
            size={20}
            color={focused ? nowTheme.COLORS.WHITE : "#c70039"}
            style={{ opacity: 0.5 }}
          />
        );
      case "My Favourites":
        return (
          <Icon
            name="heart"
            family="Font-Awesome"
            size={20}
            color={focused ? nowTheme.COLORS.WHITE : "#c70039"}
            style={{ opacity: 0.5 }}
          />
        );
      case "My Reviews":
        return (
          <Icon
            name="clipboard-list"
            family="Font-Awesome"
            size={20}
            color={focused ? nowTheme.COLORS.WHITE : "#c70039"}
            style={{ opacity: 0.5 }}
          />
        );
      case "Rate the App":
        return (
          <Icon
            name="settings-gear-642x"
            family="NowExtra"
            size={20}
            color={focused ? nowTheme.COLORS.WHITE : "#c70039"}
            style={{ opacity: 0.5 }}
          />
        );
      case "Share the App":
        return (
          <Icon
            name="phone"
            family="Font-Awesome"
            size={20}
            color={focused ? nowTheme.COLORS.WHITE : "#c70039"}
            style={{ opacity: 0.5 }}
          />
        );
      case "Give FeedBack":
        return (
          <Icon
            name="phone"
            family="Font-Awesome"
            size={20}
            color={focused ? nowTheme.COLORS.WHITE : "#c70039"}
            style={{ opacity: 0.5 }}
          />
        );

      case "GETTING STARTED":
        return (
          <Icon
            name="spaceship2x"
            family="NowExtra"
            size={20}
            style={{ borderColor: "rgba(0,0,0,0.5)", opacity: 0.5 }}
            color={focused ? nowTheme.COLORS.WHITE : "#c70039"}
          />
        );
      case "SIGN OUT":
        return (
          <Icon
            name="share"
            family="NowExtra"
            size={20}
            style={{ borderColor: "rgba(0,0,0,0.5)", opacity: 0.5 }}
            color={focused ? nowTheme.COLORS.WHITE : "#c70039"}
          />
        );
        case "SIGN IN":
        return (
          <Icon
            name="share"
            family="NowExtra"
            size={20}
            style={{ borderColor: "rgba(0,0,0,0.5)", opacity: 0.5 }}
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
             title == 'SIGN' ?
              await axiosInstance.logOut().then((response) => {
                if (response.status === 200) {
                  AsyncStorage.clear();
                  AsyncStorage.removeItem("token");
                  AsyncStorage.removeItem("category");
                  AsyncStorage.removeItem("userpk");
                  AsyncStorage.removeItem("username");
                  AsyncStorage.removeItem("profilePicture");
                  AsyncStorage.removeItem("firstname");
                  // console.log("Category: ",await AsyncStorage.getItem("category"));
                  // console.log("token: ",await AsyncStorage.getItem("token"));
                  console.log(response.status);
                  navigation.navigate('Onboarding')
                }
                else (e) => {
                  console.log("Logout Error ", e);
                }
              })
              :
              navigation.navigate(title)
        }>
        <Block flex row style={containerStyles}>
          <Block middle flex={0.1} style={{ marginRight: 5 }}>
            {this.renderIcon()}
          </Block>
          <Block row center flex={0.9}>
            <Text
              style={{
                fontFamily: "montserrat-regular",
                textTransform: "uppercase",
                fontWeight: "300"
              }}
              size={12}
              bold={focused ? true : false}
              color={focused ? nowTheme.COLORS.WHITE : "#c70039"}
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
