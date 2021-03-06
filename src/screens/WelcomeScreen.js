import * as React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Typography} from '../styles';

import Button from '../components/Button/Button';

export default ({navigation}) => {
  const insets = useSafeAreaInsets();
  const s = styles(insets);

  return (
    <View style={s.container}>
      <Image
        source={require('../assets/images/welcome.png')}
        resizeMode={'cover'}
        style={s.image}
      />
      <Text style={[Typography.HEADERS.H1, s.header]}>
        Wanna know the breed of the dog?
      </Text>
      <Text style={Typography.BODY.SEMIBOLD}>
        Within a few seconds the app{'\n'}determines the result
      </Text>
      <View style={s.bottom}>
        <View style={s.btnContainer}>
          <Button
            label={'Skip'}
            onPress={() => navigation.navigate('HomeScreen')}
            secondary
          />
          <View style={s.primaryBtnContainer}>
            <Button
              label={'Next'}
              onPress={() => navigation.navigate('GetStartedScreen')}
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
      marginLeft: 20,
    },
  });
