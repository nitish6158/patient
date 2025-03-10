import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MyAppointment from '../screens/MyAppointment/MyAppointment';
const Stack = createStackNavigator();

const AppointmentStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyAppointment"
        component={MyAppointment}
        options={{headerShown: false}}
      />
\
    </Stack.Navigator>
  );
};

export default AppointmentStack;
