import * as React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Typography} from '../styles';

import TopTabBar from '../components/TopTabBar/TopTabBar';
import BottomTabBar from '../components/BottomTabBar/BottomTabBar';
import HomeList from '../components/HomeList/HomeList';
import asHelper from '../utils/as.helper';

export default ({navigation}) => {
  const insets = useSafeAreaInsets();
  const s = styles(insets);

  const isFocused = useIsFocused();

  const [data, setData] = React.useState([]);
  const [filter, setFilter] = React.useState('all');

  React.useEffect(() => {
    async function fetch() {
      const data = await asHelper.getData();
      setData(data);
    }
    fetch();
  }, [isFocused]);

  async function rerender() {
    const data = await asHelper.getData();
    setData(data);
  }

  return (
    <SafeAreaView style={s.container}>
      <Text style={[Typography.HEADERS.H1, s.header]}>
        Wanna know the breed of the dog?
      </Text>
      <TopTabBar filter={filter} setFilter={setFilter} />
      {data && (
        <HomeList
          rerender={rerender}
          data={
            filter === 'all'
              ? data
              : filter === 'favourites'
              ? data.filter(d => d.favourite === true)
              : data.filter(d => Date.now() - d.date <= 86400000)
          }
          n={navigation}
        />
      )}

      <BottomTabBar navigation={navigation} active={'home'} data={data} />
    </SafeAreaView>
  );
};

const styles = insets =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 20,
    },
    header: {
      marginTop: insets.top > 30 ? 80 : 40,
      marginBottom: 40,
      paddingRight: 5,
    },
  });
