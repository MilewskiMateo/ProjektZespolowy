import * as React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../styles';

import Icon from '../../utils/Icon';

const Favourite = ({isFavourite, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon
        name={isFavourite ? 'heart-full' : 'heart'}
        size={20}
        color={Colors.WHITE_COLOR}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 35,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: Colors.FAV_BG_COLOR,
  },
});

export default Favourite;
