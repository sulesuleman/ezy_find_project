import React, { useState, useEffect } from 'react';

import { Block } from "galio-framework";
import { Easing, Animated, Dimensions, AsyncStorage } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//screens
import Signin from '../screens/signin';
import Signup from '../screens/signup';
import ChangePassword from '../screens/changepassword';
import Request from '../screens/request';
import Buy from '../screens/buy';
import Bid from '../screens/bid';
import Hire from '../screens/hire';
import FindBusiness from '../screens/business';

// import Articles from '../screens/Articles';
import Onboarding from '../screens/Onboarding';

//Cart Screen starts here//
// import SwipeValueBasedUi from '../screens/Cart/productlist'
// import Form from '../screens/Cart/checkout1';
// import Address from '../screens/Cart/checkout2';
// import PaymentForm from '../screens/Cart/checkout3';
// import CreditForm from '../screens/Cart/checkout4';
//Cart screen ends here//

// drawer
import CustomDrawerContent from "./Menu";

// header for screens
import { Header, Icon } from '../components';
import { nowTheme, tabs } from "../constants";


const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function RequestStack(props) {
  return (
    <Stack.Navigator initialRouteName="Request an Item" mode="card" headerMode="screen">
      <Stack.Screen name="Request an Item" component={Request} options={{
        header: ({ navigation, scene }) => (<Header title="RequestItems" navigation={navigation} scene={scene} />),
        backgroundColor: "white"
      }} />
    </Stack.Navigator>
  );
}

// function CartStack(props) {
//   return (
//     <Stack.Navigator initialRouteName="Cart" mode="card" headerMode="screen">
//       <Stack.Screen name="Cart" component={SwipeValueBasedUi} options={{
//         header:({ navigation, scene }) => (<Header title="Cart" navigation={navigation} scene={scene} />),
//         cardStyle: { backgroundColor: "#FFFFFF" },
//       }}/>
//        <Stack.Screen
//         name="Checkout"
//         component={Form}
//         options={{
//           header: ({ navigation, scene }) => (
//             <Header

//               back
//               black 
//               title="Checkout"
//               navigation={navigation}
//               scene={scene}
//             />
//           ),
//           headerTransparent: false,
//           backgroundColor: "#FFFFFF"
//         }}
//       />
//  <Stack.Screen
//         name="Address"
//         component={Address}
//         options={{
//           header: ({ navigation, scene }) => (
//             <Header

//               back
//               black 
//               title="Checkout"
//               navigation={navigation}
//               scene={scene}
//             />
//           ),
//           headerTransparent: false,
//           backgroundColor: "#FFFFFF"
//         }}
//       />
//     <Stack.Screen
//         name="Payment"
//         component={PaymentForm}
//         options={{
//           header: ({ navigation, scene }) => (
//             <Header

//               back
//               black 
//               title="Checkout"
//               navigation={navigation}
//               scene={scene}
//             />
//           ),
//           cardStyle: { backgroundColor: "#FFFFFF" },
//           headerTransparent: false,
//         }}
//       /> 
//       <Stack.Screen
//       name="Maincheckout"
//       component = {CreditForm}
//       options={{
//         header: ({ navigation, scene }) => (
//           <Header

//             back
//             black 
//             title="Checkout"
//             navigation={navigation}
//             scene={scene}
//           />
//         ),
//         cardStyle: { backgroundColor: "#FFFFFF" },
//         headerTransparent: false,
//       }}
//     />
//     </Stack.Navigator>
//   );
// }
// function TrackStack(props) {
//   return (
//     <Stack.Navigator initialRouteName="Track Order" mode="card" headerMode="screen">

// <Stack.Screen
//       name="Track Order"
//       component={TrackOrder}
//       options={{
//         header: ({ navigation, scene }) => (
//           <Header
//             transparent

//             black
//             title="Track Order"
//             navigation={navigation}
//             scene={scene}
//           />
//         ),
//         cardStyle: { backgroundColor: "#FFFFFF" },
//         headerTransparent: false
//       }
//     }
//     />
//     <Stack.Screen
//       name="Track Details"
//       component={OrderProcess}
//       options={{
//         header: ({ navigation, scene }) => (
//           <Header
//             transparent
//             back
//             black
//             title="Track Details"
//             navigation={navigation}
//             scene={scene}
//           />
//         ),
//         cardStyle: { backgroundColor: "#FFFFFF" },
//         headerTransparent: false
//       }
//     }
//     />
//      </Stack.Navigator>
//   );
// }
// function SettingsStack(props) {
//   return (
//     <Stack.Navigator initialRouteName="Settings" mode="card" headerMode="screen">
//       <Stack.Screen
//         name="Settings"
//         component={Setting}
//         options={{
//           header: ({ navigation, scene }) => (
//             <Header
//               transparent
//               white
//               title="SETTINGS"
//               navigation={navigation}
//               scene={scene}
//             />
//           ),
//           cardStyle: { backgroundColor: "#FFFFFF" },
//           headerTransparent: true
//         }
//         }
//       />

//       <Stack.Screen
//         name="Faq"
//         component={FAQ}
//         options={{
//           header: ({ navigation, scene }) => (
//             <Header
//               transparent
//               black
//               back
//               title="FAQ"
//               navigation={navigation}
//               scene={scene}
//             />
//           ),
//           cardStyle: { backgroundColor: "#FFFFFF" },
//           headerTransparent: true
//         }
//         }
//       />
//       <Stack.Screen
//         name="About"
//         component={About}
//         options={{
//           header: ({ navigation, scene }) => (
//             <Header
//               transparent
//               white
//               back
//               title="About Us"
//               navigation={navigation}
//               scene={scene}
//             />
//           ),
//           cardStyle: { backgroundColor: "#FFFFFF" },
//           headerTransparent: true
//         }
//         }
//       />
//     </Stack.Navigator>
//   );
// }

// function ArticlesStack(props) {
//   return (
//     <Stack.Navigator initialRouteName="Articles" mode="card" headerMode="screen">
//       <Stack.Screen name="Articles" component={Articles} options={{
//         header: ({ navigation, scene }) => (<Header title="Articles" navigation={navigation} scene={scene} />),
//         backgroundColor: '#FFFFFF'
//       }} />
//     </Stack.Navigator>
//   );
// }

function AccountStack(props) {
  return (
    <Stack.Navigator initialRouteName="SIGN IN" mode="card" headerMode="screen">
      <Stack.Screen
        name="SIGN IN"
        component={Signin}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              title=""
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name="SIGN UP"
        component={Signup}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              back
              title="SIGN UP"
              navigation={navigation}
              scene={scene}
            />
          ),

          headerTransparent: true
        }}
      />

      <Stack.Screen
        name="Change Passowrd"
        component={ChangePassword}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              back
              title="Change Password"
              navigation={navigation}
              scene={scene}
            />
          ),

          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}

function BuyStack(props) {
  return (
    <Stack.Navigator initialRouteName="Buy" mode="card" headerMode="screen">
      <Stack.Screen
        name="Buy"
        component={Buy}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              black
              title="Buy"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}


function BidStack(props) {
  return (
    <Stack.Navigator initialRouteName="Bid" mode="card" headerMode="screen">
      <Stack.Screen
        name="Bid"
        component={Bid}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              black
              title="Bid"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}

function HireStack(props) {
  return (
    <Stack.Navigator initialRouteName="Hire" mode="card" headerMode="screen">
      <Stack.Screen
        name="Hire"
        component={Hire}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              black
              title="Hire"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}

function FindBusinessStack(props) {
  return (
    <Stack.Navigator initialRouteName="Find Business" mode="card" headerMode="screen">
      <Stack.Screen
        name="Find Business"
        component={FindBusiness}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              black
              title="Find Business"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}


function AppStack(props) {
  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={props => <CustomDrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: nowTheme.COLORS.WHITE,
        width: width * 0.6
      }}
      drawerContentOptions={{
        activeTintcolor: nowTheme.COLORS.WHITE,
        inactiveTintColor: nowTheme.COLORS.WHITE,
        activeBackgroundColor: "transparent",
        itemStyle: {
          width: width * 0.75,
          backgroundColor: "transparent",
          paddingVertical: 16,
          paddingHorizonal: 12,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          overflow: "hidden"
        },
        labelStyle: {
          fontSize: 18,
          marginLeft: 12,
          fontWeight: "normal"
        }
      }}
      initialRouteName="Request an Item"
    >
      <Drawer.Screen name="Request an Item" component={RequestStack} />
      <Drawer.Screen name="Buy" component={BuyStack} />
      <Drawer.Screen name="Bid" component={BidStack} />
      <Drawer.Screen name="Hire" component={HireStack} />
      <Drawer.Screen name="Find Business" component={FindBusinessStack} />
      {/* <Drawer.Screen name="Specials" component={SpecialsStack} />
      <Drawer.Screen name="Catalogue" component={CatalogueStack} />
      <Drawer.Screen name="Special Maps" component={MapsStack} />
      <Drawer.Screen name="Categories" component={CategoryStack} />
      <Drawer.Screen name="My Favourites" component={FavStack} />
      <Drawer.Screen name="My Reviews" component={ReviewStack} />
      <Drawer.Screen name="Rate the App" component={RateAppStack} />
      <Drawer.Screen name="Share the App" component={ShareAppStack} />
      <Drawer.Screen name="Give FeedBack" component={FeedbackStack} /> */}
      <Drawer.Screen name="SIGN IN" component={AccountStack} />
    </Drawer.Navigator>

  );
}

export default function OnboardingStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        option={{
          headerTransparent: true
        }}
      />
      <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>
  );
}

