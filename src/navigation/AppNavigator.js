import * as React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {Colors} from '../styles';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import RecognitionScreen from '../screens/RecognitionScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import GetStartedScreen from '../screens/GetStartedScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: Colors.WHITE_COLOR},
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen name={'WelcomeScreen'} component={WelcomeScreen} />
      <Stack.Screen name={'GetStartedScreen'} component={GetStartedScreen} />
      <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
      <Stack.Screen name={'SearchScreen'} component={SearchScreen} />
      <Stack.Screen name={'RecognitionScreen'} component={RecognitionScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
