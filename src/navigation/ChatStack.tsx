import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MyChat from '../screens/MyChat/MyChat';
const Stack = createStackNavigator();

const ChatStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyChat"
        component={MyChat}
        options={{headerShown: false}}
      />

    </Stack.Navigator>
  );
};

export default ChatStack;
