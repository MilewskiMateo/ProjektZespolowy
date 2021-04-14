import * as React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors, Typography} from '../../../styles';

const VerticalListItem = ({label, percent, imageUri, disabled, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      disabled={disabled}>
      <ImageBackground source={{uri: imageUri}} style={styles.image}>
        <LinearGradient
          locations={[0, 0.2, 0.6]}
          colors={[
            Colors.IMG_START_COLOR,
            Colors.IMG_MIDDLE_COLOR,
            Colors.IMG_STOP_COLOR,
          ]}
          style={styles.mask}>
          <Text style={[Typography.HEADERS.H5, styles.label]}>{label}</Text>
          <Text style={[Typography.HEADERS.H3, styles.percent]}>
            {percent + '%'}
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 157,
    borderRadius: 36,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  mask: {
    flex: 1,
    padding: 22,
    backgroundColor: Colors.DARK_COLOR_40,
  },
  label: {
    color: Colors.WHITE_COLOR,
  },
  percent: {
    marginTop: 2,
    color: Colors.WHITE_COLOR,
  },
});

export default VerticalListItem;
