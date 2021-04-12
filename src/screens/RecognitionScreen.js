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
    async function add() {
      await asHelper.addData({
        id: Date.now().toString(),
        label: 'Labrador Retriver',
        percent: 95,
        imageUri: 'data:image/png;base64,'.concat(image.base64),
        favourite: true,
      });
      //   console.log(image.base64);
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
          //   source={require('../assets/images/progress.png')}
          source={{uri: 'data:image/png;base64,'.concat(image.base64)}}
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
