import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import AppNavigator from './AppNavigator';

const client = new ApolloClient({
  uri: 'https://graphql-api-dog-breeds.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

export default () => {
  return (
    <SafeAreaProvider>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <StatusBar
            //   backgroundColor={Colors.WHITE_COLOR}
            barStyle={'dark-content'}
          />
          <AppNavigator />
        </NavigationContainer>
      </ApolloProvider>
    </SafeAreaProvider>
  );
};
