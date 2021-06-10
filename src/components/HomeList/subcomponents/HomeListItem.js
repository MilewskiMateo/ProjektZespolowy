import * as React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors, Typography} from '../../../styles';
import asHelper from '../../../utils/as.helper';
import Favourite from '../../Favourite/Favourite';

const HomeListItem = ({
  label,
  percent,
  imageUri,
  favourite,
  onPress,
  id,
  rerender,
}) => {
  async function handleFavourite() {
    await asHelper.changeFavourite(id);
    rerender();
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
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
          <View style={styles.favouriteContainer}>
            <Favourite isFavourite={favourite} onPress={handleFavourite} />
          </View>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 240,
    borderRadius: 36,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  mask: {
    flex: 1,
    justifyContent: 'center',
    padding: 32,
    backgroundColor: Colors.DARK_COLOR_40,
  },
  label: {
    color: Colors.WHITE_COLOR,
    textTransform: 'capitalize',
  },
  percent: {
    marginTop: 2,
    color: Colors.WHITE_COLOR,
  },
  favouriteContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
});

export default HomeListItem;
