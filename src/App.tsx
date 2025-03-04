import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './navigation/AuthStack';
const App: React.FC = () => {
  return (
    <SafeAreaProvider>
        <NavigationContainer>
          <AuthStack />
        </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
