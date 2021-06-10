import * as React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Typography} from '../styles';
import asHelper from '../utils/as.helper';
import recognitionHelper from '../utils/recognition/recognition.helper';
import getDescription from '../utils/recognition/getDescription';

export default ({navigation, route}) => {
  const insets = useSafeAreaInsets();
  const s = styles(insets);
  const image = JSON.parse(route.params.image);

  React.useEffect(() => {
    async function predict() {
      const result = await recognitionHelper.getPredition(image.base64);
      const info = await getDescription(result[0].className);

      listOfOtherPredictions = [];
      for (let index = 1; index < result.length; index++) {
        result[index]['id'] = index.toString();
        otherInfo =  await getDescription(result[index].className);
        result[index]['image'] = otherInfo && otherInfo.image
        listOfOtherPredictions.push(result[index]);
      }

      const item = {
        id: Date.now().toString(),
        label: result[0].className,
        percent: Math.round(result[0].probability * 100),
        info: info,
        imageUri: 'data:image/png;base64,'.concat(image.base64),
        favourite: false,
        date: Date.now(),
        other: listOfOtherPredictions,
      };

      await asHelper.addData(item);
      setTimeout(function() {
        navigation.navigate('HomeScreen');
        navigation.navigate('DogScreen', {item: item});
      }, 2000);
    }
    predict();
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
