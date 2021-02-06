import React, {useState,useEffect} from "react";
// import axiosInstance from "../APIs/axiosApi";
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Linking,
  // AsyncStorage
} from "react-native";
import { Block, Text, theme } from "galio-framework";
import { useSafeArea } from "react-native-safe-area-context";
import Images from "../constants/Images";
import { DrawerItem as DrawerCustomItem, Icon } from "../components";

import nowTheme from "../constants/Theme";
const { width } = Dimensions.get("screen");
// var token=null
// var cat=null

function CustomDrawerContent({
  drawerPosition,
  navigation,
  profile,
  focused,
  state,
  ...rest
}) {
  
    // const [token, setToken] = useState('');
    // const [category, setCategory] = useState('');
  
    // useEffect( () => {
    //   async function fetchData() {
    //   setToken(await AsyncStorage.getItem('token')),
    //   setCategory(await AsyncStorage.getItem('category'))
    //   console.log('data login ka', token,category)
    // }
  
  // fetchData();});
    
  const insets = useSafeArea();
  
    const screens = [        
      "Request an Item",
      "Buy",
      "Bid",
      "Hire",
      "Find Business",
      "Specials",
      "Catalogue",
      "Special Maps",
      "Categories",
      "My Favourites",
      "My Reviews"
    ];
    // const farmerscreens = [        
    //   "Asaan Kisaan Market",
    //   "Crop Prediction",
    //   "Disease Detection",
    //   "Farmer Dashboard",
    //   "Track Order",
    //   "Message",
    //   "Profile",
    //   "Settings",
    //   "Contact Us"
  
    // ];
    // const customerscreens = [        
    //   "Asaan Kisaan Market",
    //   "Cart",
    //   "Wishlist",
    //   "Profile",
    //   "Track Order",
    //   "Settings",
    //   "Contact Us"
  
    // ];
    // const vendorscreens = [        
    //   "Asaan Kisaan Market",
    //   "Vendor Dashboard",
    //   "Track Order",
    //   "Profile",
    //   "Settings",
    //   "Contact Us"
    // ];
   
   
    
    
  return (
    <Block
      style={styles.container}
      forceInset={{ top: "always", horizontal: "never" }}
    >
      <Block style={styles.header}>
        
        {/* <Image style={styles.logo} source={Images.Logo} /> */}
        <Block middle style={styles.headerIcon}>
          <Icon
            name="user-circle"
            family="Font-Awesome"
            size={130}
            color={"#c70039"}
          />
        </Block>
        <Text style={{fontSize: 13}}>Tap to Sign in/Sign up Now</Text>
      </Block>
      <Block
            style={{ borderColor: 'black', width: '93%',
              borderWidth: StyleSheet.hairlineWidth, marginHorizontal: 10, marginVertical:'4%'}}
          />
      <Block flex style={{ paddingLeft: 8, paddingRight: 14 }}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          {
          screens.map((item, index) => {
            return (
              <DrawerCustomItem
                title={item}
                key={index}
                navigation={navigation}
                focused={state.index === index ? true : false}
              />
            );
          }) 
          }
          <Block flex style={{ marginTop: 24, marginVertical: 8, paddingHorizontal: 8 }}>
          <Block
            style={{ borderColor: 'black', width: '93%', borderWidth: StyleSheet.hairlineWidth, marginHorizontal: 10}}
          />
        </Block>
        {
        <Block>   
          <DrawerCustomItem title = "Rate the App" navigation={navigation}/>
          <DrawerCustomItem title = "Share the App" navigation={navigation}/>
          <DrawerCustomItem title = "Give FeedBack" navigation={navigation} />
          <DrawerCustomItem title = "SIGN IN" navigation={navigation}/>
          <DrawerCustomItem title = "SIGN OUT" navigation={navigation}/>
        </Block>
        }
        </ScrollView>
        </Block>
    </Block>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    paddingHorizontal: 28,
    paddingBottom: theme.SIZES.BASE,
    paddingTop: theme.SIZES.BASE * 3,
    justifyContent: "center"
  },
  headerIcon: {
    marginTop: -20
  },
  logo: {
    height: 40,
    width: 37
  }
});

export default CustomDrawerContent;
