import * as React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../styles';

import Icon from '../../utils/Icon';

const BackButton = ({color = Colors.DARK_COLOR}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.goBack()}>
      <Icon name={'arrow-left'} size={27} color={color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
});

export default BackButton;
