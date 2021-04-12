import * as React from 'react';
import {
  SafeAreaView,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Colors, Typography} from '../styles';

import BackButton from '../components/BackButton/BackButton';
import asHelper from '../utils/as.helper';

export default ({navigation}) => {
  const [value, onChangeText] = React.useState('');
  const [aa, bb] = React.useState('');

  const data = [];

  return (
    <SafeAreaView style={styles.container}>
      <BackButton />
      <TextInput
        style={[Typography.HEADERS.H4, styles.searchInput]}
        onChangeText={text => onChangeText(text)}
        value={value}
        placeholder={'What are you looking for?'}
        placeholderTextColor={Colors.DARK_COLOR}
        selectionColor={Colors.PRIMARY_COLOR}
      />
      <TouchableOpacity
        onPress={async () => {
          await asHelper.storeData(data);
          //   console.log(await asHelper.getData());
        }}>
        <Text>GET</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  searchInput: {
    height: 58,
    padding: 14,
    backgroundColor: Colors.WHITE_COLOR,
    borderRadius: 23,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.09,
    shadowRadius: 47,
  },
});
