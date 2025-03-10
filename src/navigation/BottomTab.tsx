import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import MyAppointment from '../screens/MyAppointment/MyAppointment';
import SearchDoctor from '../screens/SearchDoctor/SearchDoctor';
import AppointmentStack from './AppointmentStack';
import PrescriptionStack from './PrescriptionStack';
import MyPrescription from '../screens/MyPrescription/MyPrescription';
import MyChat from '../screens/MyChat/MyChat';
import {Image, Platform, StyleSheet, TouchableOpacity, View} from 'react-native';
import {IMAGES} from '../assets';
import {
  horizontalScale,
  screenWidth,
  verticalScale,
} from '../utils/DimensionConstant';
import {Colors} from '../utils/Constants';
import ChatStack from './ChatStack';

const Tab = createBottomTabNavigator();
const CustomTabButton = ({ children, onPress }: any) => (
    <TouchableOpacity style={styles.customButton} onPress={onPress}>
      <View style={styles.innerButton}>{children}</View>
    </TouchableOpacity>
  );
const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let iconStyle = focused
            ? {height: verticalScale(25), width: horizontalScale(25)}
            : {height: verticalScale(25), width: horizontalScale(25)};

          if (route.name === 'Home') {
            iconName = focused ? IMAGES.homeFocused : IMAGES.homeUnFocused;
          } else if (route.name === 'Appointment') {
            iconName = focused ? IMAGES.appointmentFc : IMAGES.appointmentUn;
          } else if (route.name === 'Search') {
            iconName = focused ? IMAGES.searchUN : IMAGES.searchUN;
          } else if (route.name === 'Prescription') {
            iconName = focused ? IMAGES.priscriptionFc : IMAGES.priscriptionUn;
          } else {
            iconName = focused ? IMAGES.chatfocused : IMAGES.chatUnfocused;
          }
          // Adjust size for focused vs. non-focused state

          return (
            <Image
              resizeMode="contain"
              style={
                route.name === 'Search'
                  ? {height: verticalScale(95), width: horizontalScale(95),marginBottom:20}
                  : {...iconStyle}
              }
              source={iconName}
            />
          );
        },
        tabBarStyle: {
            position: 'absolute',
            height: 70,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: '#fff',
          },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'green',
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Appointment" component={MyAppointment} />
      <Tab.Screen name="Search" component={SearchDoctor} />
      <Tab.Screen name="Prescription" component={MyPrescription} />
      <Tab.Screen name="Chat" component={MyChat} />
    </Tab.Navigator>
  );
};
export default BottomTab;
const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    customButton: {
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    innerButton: {
      width: 70,
      height: 70,
      borderRadius: 35,
      backgroundColor: '#6200ea',
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 5,
    },
});

