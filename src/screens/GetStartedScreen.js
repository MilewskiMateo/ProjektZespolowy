import * as React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Typography} from '../styles';

import Button from '../components/Button/Button';

export default ({navigation}) => {
  const insets = useSafeAreaInsets();
  const s = styles(insets);

  return (
    <View style={s.container}>
      <Image
        source={require('../assets/images/getstarted.png')}
        resizeMode={'cover'}
        style={s.image}
      />
      <Text style={[Typography.HEADERS.H1, s.header]}>
        Identify dog breed{'\n'}easy and quick
      </Text>
      <Text style={Typography.BODY.SEMIBOLD}>
        You can use camera or upload photo{'\n'}from your gallery
      </Text>
      <View style={s.bottom}>
        <View style={s.btnContainer}>
          <View style={s.primaryBtnContainer}>
            <Button
              label={'Next'}
              onPress={() => navigation.navigate('HomeScreen')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = insets =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginTop: insets.top > 30 ? insets.top + 112 : insets.top + 56,
      marginHorizontal: 20,
    },
    image: {
      height: '50%',
      width: '100%',
    },
    header: {
      marginTop: 20,
      marginRight: 5,
      marginBottom: 20,
    },
    bottom: {
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: 20 + insets.bottom,
    },
    btnContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    primaryBtnContainer: {
      flex: 1,
    },
  });
