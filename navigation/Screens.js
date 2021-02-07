import React, { useState, useEffect } from 'react';

import { Block } from "galio-framework";
import { Easing, Animated, Dimensions, AsyncStorage } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//screens
import Signin from '../screens/signin';
import Signup from '../screens/signup';
import Profile from '../screens/profile';
import ChangePassword from '../screens/changepassword';

//Request an Item screens
import RequestItem1 from '../screens/requestItems/requestitem_1';
import RequestItem2 from '../screens/requestItems/requestitem_2';


import Buy from '../screens/buy';
import Bid from '../screens/bid';
import Hire from '../screens/hire';
import FindBusiness from '../screens/business';
import Review from '../screens/review';
import SpecialMaps from '../screens/specialmaps';

import Onboarding from '../screens/Onboarding';

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
      <Stack.Screen 
        name="Request an Item" 
        component={RequestItem1} 
        options={{
        header: ({ navigation, scene }) => (
        <Header 
          title="RequestItems" 
          navigation={navigation} 
          scene={scene} 
          />),
          cardStyle: { backgroundColor: "#FFFFFF" },
      }} 
      />
      <Stack.Screen
        name="Request2"
        component={RequestItem2}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              title="Request and Item"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "white" },
          headerTransparent: false
        }}
      /> 
    </Stack.Navigator>
  );
}

function AccountStack(props) {
  return (
    <Stack.Navigator initialRouteName="Profile" mode="card" headerMode="screen">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Profile"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "white" },
          headerTransparent: false
        }}
      />
      <Stack.Screen
        name="SIGN IN"
        component={Signin}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              transparent
              title=""
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "white" },
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name="SIGN UP"
        component={Signup}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              title="SIGN UP"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "white" },
          headerTransparent: false
        }}
      />
      <Stack.Screen
        name="changePassword"
        component={ChangePassword}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              title="Change Password"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "white" },
          headerTransparent: false
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

              black
              title="Enter Company Info"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "white" },
          headerTransparent: false
        }}
      />
    </Stack.Navigator>
  );
}

function SpecialsStack(props) {
  return (
    <Stack.Navigator initialRouteName="Specials" mode="card" headerMode="screen">
      <Stack.Screen
        name="Specials"
        component={FindBusiness}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              black
              title="Specials"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "white" },
          headerTransparent: false
        }}
      />
    </Stack.Navigator>
  );
}

function CatalogueStack(props) {
  return (
    <Stack.Navigator initialRouteName="Catalogue" mode="card" headerMode="screen">
      <Stack.Screen
        name="Catalogue"
        component={FindBusiness}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              black
              title="Catalogue"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "white" },
          headerTransparent: false
        }}
      />
    </Stack.Navigator>
  );
}

function MapsStack(props) {
  return (
    <Stack.Navigator initialRouteName="Special Maps" mode="card" headerMode="screen">
      <Stack.Screen
        name="Special Maps"
        component={SpecialMaps}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              black
              title="Special Maps"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "white" },
          headerTransparent: false
        }}
      />
    </Stack.Navigator>
  );
}


function CategoryStack(props) {
  return (
    <Stack.Navigator initialRouteName="Categories" mode="card" headerMode="screen">
      <Stack.Screen
        name="Categories"
        component={FindBusiness}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              black
              title="Categories"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "white" },
          headerTransparent: false
        }}
      />
    </Stack.Navigator>
  );
}

function FavStack(props) {
  return (
    <Stack.Navigator initialRouteName="My Favourites" mode="card" headerMode="screen">
      <Stack.Screen
        name="My Favourites"
        component={FindBusiness}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              black
              title="My Favourites"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "white" },
          headerTransparent: false
        }}
      />
    </Stack.Navigator>
  );
}

function ReviewStack(props) {
  return (
    <Stack.Navigator initialRouteName="My Reviews" mode="card" headerMode="screen">
      <Stack.Screen
        name="My Reviews"
        component={Review}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              black
              title="My Reviews"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "white" },
          headerTransparent: false
        }}
      />
    </Stack.Navigator>
  );
}


function RateAppStack(props) {
  return (
    <Stack.Navigator initialRouteName="Rate the App" mode="card" headerMode="screen">
      <Stack.Screen
        name="Rate the App"
        component={FindBusiness}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              black
              title="Rate the App"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "white" },
          headerTransparent: false
        }}
      />
    </Stack.Navigator>
  );
}


function ShareAppStack(props) {
  return (
    <Stack.Navigator initialRouteName="Share the App" mode="card" headerMode="screen">
      <Stack.Screen
        name="Share the App"
        component={FindBusiness}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              black
              title="Share the App"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "white" },
          headerTransparent: false
        }}
      />
    </Stack.Navigator>
  );
}

function FeedbackStack(props) {
  return (
    <Stack.Navigator initialRouteName="Give FeedBack" mode="card" headerMode="screen">
      <Stack.Screen
        name="Give FeedBack"
        component={FindBusiness}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              black
              title="Give FeedBack"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "white" },
          headerTransparent: false
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
      <Drawer.Screen name="Specials" component={SpecialsStack} />
      <Drawer.Screen name="Catalogue" component={CatalogueStack} />
      <Drawer.Screen name="Special Maps" component={MapsStack} />
      <Drawer.Screen name="Categories" component={CategoryStack} />
      <Drawer.Screen name="My Favourites" component={FavStack} />
      <Drawer.Screen name="My Reviews" component={ReviewStack} /> 
      <Drawer.Screen name="Rate the App" component={RateAppStack} />
      <Drawer.Screen name="Share the App" component={ShareAppStack} />
      <Drawer.Screen name="Give FeedBack" component={FeedbackStack} /> 
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

