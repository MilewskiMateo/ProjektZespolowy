import * as React from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Colors} from '../../styles';

import BottomTabBarButton from './subcomponents/BottomTabBarButton';

const BottomTabBar = ({navigation, data}) => {
  const insets = useSafeAreaInsets();
  const s = styles(insets);

  const createPermissionAlert = () =>
    Alert.alert(
      'Permission denied',
      "Without this permission the app is unable to handle the photo. Check the app's permissions in the settings.",
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
    );

  return (
    <View style={s.container}>
      <DropShadow style={s.shadow}>
        <View style={s.bar}>
          <BottomTabBarButton
            icon={'home'}
            color={Colors.PRIMARY_COLOR}
            onPress={() => navigation.navigate('HomeScreen')}
          />
          <BottomTabBarButton
            icon={'camera'}
            onPress={() => {
              launchCamera(
                {
                  mediaType: 'photo',
                  includeBase64: true,
                  maxHeight: 1200,
                  maxWidth: 1200,
                },
                response => {
                  if (!response.didCancel && !response.errorCode) {
                    navigation.navigate('RecognitionScreen', {
                      image: JSON.stringify(response),
                    });
                  } else if (response.errorCode) {
                    console.log(response.errorCode);
                    createPermissionAlert();
                  }
                },
              );
            }}
          />
          <BottomTabBarButton
            icon={'image'}
            onPress={() => {
              launchImageLibrary(
                {
                  mediaType: 'photo',
                  includeBase64: true,
                  maxHeight: 1200,
                  maxWidth: 1200,
                },
                response => {
                  if (!response.didCancel && !response.errorCode) {
                    navigation.navigate('RecognitionScreen', {
                      image: JSON.stringify(response),
                    });
                  }
                },
              );
            }}
          />
          <BottomTabBarButton
            icon={'search'}
            onPress={() => navigation.navigate('SearchScreen', {data: data})}
          />
        </View>
      </DropShadow>
    </View>
  );
};

const styles = insets =>
  StyleSheet.create({
    container: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 20 + insets.bottom,
    },
    bar: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
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
