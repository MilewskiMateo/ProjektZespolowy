import * as React from 'react';
import {StyleSheet, View} from 'react-native';

import TopTabBarButton from './subcomponents/TopTabBarButton';

const TopTabBar = ({filter, setFilter}) => {
  return (
    <View style={styles.container}>
      <TopTabBarButton
        icon={'category'}
        label={'All'}
        selected={filter === 'all'}
        onPress={() => setFilter('all')}
      />
      <View style={styles.separator} />
      <TopTabBarButton
        icon={'heart'}
        label={'Favourites'}
        selected={filter === 'favourites'}
        onPress={() => setFilter('favourites')}
      />
      <View style={styles.separator} />
      <TopTabBarButton
        icon={'time'}
        label={'Last'}
        selected={filter === 'last'}
        onPress={() => setFilter('last')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  separator: {
    width: 17,
  },
});

export default TopTabBar;
