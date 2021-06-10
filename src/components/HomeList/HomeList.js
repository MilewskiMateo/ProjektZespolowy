import * as React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Typography} from '../../styles';

import HomeListItem from './subcomponents/HomeListItem';

const RenderItem = ({item, rerender, n}) => {
  return (
    <HomeListItem
      label={item.label}
      percent={item.percent}
      imageUri={item.imageUri}
      favourite={item.favourite}
      rerender={rerender}
      id={item.id}
      onPress={() => n.navigate('DogScreen', {item: item})}
    />
  );
};

const HomeList = ({rerender, data, n}) => {
  const insets = useSafeAreaInsets();
  const s = styles(insets);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      style={s.container}
      data={data}
      renderItem={({item}) => (
        <RenderItem item={item} rerender={rerender} n={n} />
      )}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={() => <View style={s.separator} />}
      ListFooterComponent={() => <View style={s.footer} />}
      ListEmptyComponent={() => (
        <Text style={[Typography.HEADERS.H1, s.nothing]}>
          Unfortunately, we{'\n'}found nothing
        </Text>
      )}
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
    nothing: {
      marginTop: 40,
    },
  });

export default HomeList;
