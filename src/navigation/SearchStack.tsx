import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SearchDoctor from '../screens/SearchDoctor/SearchDoctor';
import ClinicDetail from '../screens/ClinicDetail/ClinicDetail';
import DoctorDetail from '../screens/DoctorDetail/DoctorDetail';
const Stack = createStackNavigator();

const SearchStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SearchDoctor"
        component={SearchDoctor}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ClinicDetail"
        component={ClinicDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DoctorDetail"
        component={DoctorDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default SearchStack;
