import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Colors} from '../../styles';

import BottomTabBarButton from './subcomponents/BottomTabBarButton';

const BottomTabBar = ({navigation}) => {
  const insets = useSafeAreaInsets();
  const s = styles(insets);

  return (
    <DropShadow style={s.shadow}>
      <View style={s.container}>
        <BottomTabBarButton
          icon={'home'}
          color={Colors.PRIMARY_COLOR}
          onPress={() => navigation.navigate('HomeScreen')}
        />
        <BottomTabBarButton
          icon={'camera'}
          onPress={async () =>
            launchCamera(
              {
                mediaType: 'photo',
                includeBase64: true,
                maxHeight: 1200,
                maxWidth: 1200,
              },
              response => {
                navigation.navigate('RecognitionScreen', {
                  image: JSON.stringify(response),
                });
              },
            )
          }
        />
        <BottomTabBarButton
          icon={'image'}
          onPress={async () => {
            launchImageLibrary(
              {
                mediaType: 'photo',
                includeBase64: true,
                maxHeight: 1200,
                maxWidth: 1200,
              },
              response => {
                navigation.navigate('RecognitionScreen', {
                  image: JSON.stringify(response),
                });
              },
            );
          }}
        />
        <BottomTabBarButton
          icon={'search'}
          onPress={() => navigation.navigate('SearchScreen')}
        />
      </View>
    </DropShadow>
  );
};

const styles = insets =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 20 + insets.bottom,
      height: 80,
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
  });

export default BottomTabBar;
