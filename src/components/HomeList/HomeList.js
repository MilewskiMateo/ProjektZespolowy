import * as React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import asHelper from '../../utils/as.helper';

import HomeListItem from './subcomponents/HomeListItem';

const renderItem = ({item}) => (
  <HomeListItem
    label={item.label}
    percent={item.percent}
    imageUri={item.imageUri}
    favourite={item.favourite}
    handleFavourite={async () => {
      await asHelper.changeFavourite(item.id);
    }}
    onPress={async () => await asHelper.changeFavourite(id)}
    onPress={() => console.log('PRESSED')}
  />
);
const HomeList = ({data}) => {
  const insets = useSafeAreaInsets();
  const s = styles(insets);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      style={s.container}
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={() => <View style={s.separator} />}
      ListFooterComponent={() => <View style={s.footer} />}
    />
  );
};

const styles = insets =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 28,
      marginBottom: 120,
      marginHorizontal: -20,
      paddingHorizontal: 20,
    },
    separator: {
      width: 20,
    },
    footer: {
      width: 40,
    },
  });

export default HomeList;
