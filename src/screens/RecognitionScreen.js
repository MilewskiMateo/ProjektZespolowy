import * as React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Typography} from '../styles';
import asHelper from '../utils/as.helper';

export default ({navigation, route}) => {
  const insets = useSafeAreaInsets();
  const s = styles(insets);
  const image = JSON.parse(route.params.image);

  React.useEffect(() => {
    const item = {
      id: Date.now().toString(),
      label: 'Labrador Retriver' + Date.now().toString(),
      percent: 95,
      imageUri: 'data:image/png;base64,'.concat(image.base64),
      favourite: false,
      date: Date.now(),
    };
    async function add() {
      await asHelper.addData(item);
      setTimeout(function() {
        navigation.navigate('HomeScreen');
        navigation.navigate('DogScreen', {item: item});
      }, 2000);
    }
    add();
  }, []);

  return (
    <View style={s.container}>
      <Text style={[Typography.HEADERS.H1, s.header]}>
        Recognition{'\n'}is in progress
      </Text>
      <Text style={Typography.BODY.SEMIBOLD}>
        In a moment you will learn everything
      </Text>
      <View style={s.imageContainer}>
        <Image
          source={require('../assets/images/progress.png')}
          resizeMode={'cover'}
          style={s.image}
        />
      </View>
    </View>
  );
};

const styles = insets =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 20,
    },
    imageContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },
    image: {
      height: '100%',
      width: '70%',
    },
    header: {
      marginTop: insets.top > 30 ? insets.top + 112 : insets.top + 56,
      marginBottom: 20,
    },
  });
