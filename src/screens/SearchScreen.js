import * as React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Colors, Typography} from '../styles';

import BackButton from '../components/BackButton/BackButton';
import asHelper from '../utils/as.helper';
import DropShadow from 'react-native-drop-shadow';
import VerticalList from '../components/VerticalList/VerticalList';

export default ({navigation, route}) => {
  const insets = useSafeAreaInsets();
  const s = styles(insets);
  const isFocused = useIsFocused();

  // const {data} = route.params;

  const [value, onChangeText] = React.useState('');
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    async function fetch() {
      const data = await asHelper.getData();
      setData(data);
    }
    fetch();
  }, [isFocused]);

  return (
    <View style={s.container}>
      <BackButton />
      <DropShadow style={s.shadow}>
        <TextInput
          style={[Typography.HEADERS.H4, s.searchInput]}
          onChangeText={text => onChangeText(text)}
          value={value}
          placeholder={'What are you looking for?'}
          placeholderTextColor={Colors.DARK_COLOR}
          selectionColor={Colors.PRIMARY_COLOR}
        />
      </DropShadow>
      <View style={s.list}>
        <VerticalList
          data={data.filter(d =>
            d.label.toLowerCase().includes(value.toLowerCase()),
          )}
          n={navigation}
        />
      </View>

      {/* <TouchableOpacity
        onPress={async () => {
          await asHelper.storeData(data);
        }}>
        <Text>GET</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = insets =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 20,
      marginTop: insets.top,
    },
    searchInput: {
      height: 58,
      padding: 14,
      backgroundColor: Colors.WHITE_COLOR,
      borderRadius: 23,
    },
    shadow: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.09,
      shadowRadius: 47,
    },
    list: {
      flex: 1,
      paddingTop: 20,
    },
  });
