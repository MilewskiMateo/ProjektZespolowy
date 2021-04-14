import * as React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {Typography} from '../../styles';

import VerticalListItem from './subcomponents/VerticalListItem';

const RenderItem = ({item, n}) => {
  return (
    <VerticalListItem
      label={item.label}
      percent={item.percent}
      imageUri={item.imageUri}
      onPress={() => n.navigate('DogScreen', {item: item})}
    />
  );
};

const VerticalList = ({data, n}) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      style={styles.container}
      data={data}
      renderItem={({item}) => <RenderItem item={item} n={n} />}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListFooterComponent={() => <View style={styles.footer} />}
      ListEmptyComponent={() => (
        <Text style={[Typography.HEADERS.H1, styles.nothing]}>
          Unfortunately, we found nothing
        </Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
  separator: {
    height: 20,
  },
  footer: {
    height: 40,
  },
  nothing: {
    marginTop: 40,
  },
});

export default VerticalList;
