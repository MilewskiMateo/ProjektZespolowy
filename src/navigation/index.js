import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import AppNavigator from './AppNavigator';

export default () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar
          //   backgroundColor={Colors.WHITE_COLOR}
          barStyle={'dark-content'}
        />
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
