import * as React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {Colors, Typography} from '../../styles';

import Icon from '../../utils/Icon';

const DeleteButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name={'delete'} size={20} color={Colors.WHITE_COLOR} />
      <Text style={[Typography.BODY.MEDIUM, styles.text]}>Delete</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 35,
    width: 85,
    paddingVertical: 7.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: Colors.FAV_BG_COLOR,
  },
  text: {
    marginLeft: 5,
    color: Colors.WHITE_COLOR,
  },
});

export default DeleteButton;
