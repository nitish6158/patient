import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MyPrescription from '../screens/MyPrescription/MyPrescription';
const Stack = createStackNavigator();

const PrescriptionStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyPrescription"
        component={MyPrescription}
        options={{headerShown: false}}
      />

    </Stack.Navigator>
  );
};

export default PrescriptionStack;
