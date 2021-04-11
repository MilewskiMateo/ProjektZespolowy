import * as React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import {Colors, Typography} from '../../styles';

const Button = ({label, secondary, onPress}) => {
  const s = styles(secondary);

  return (
    <TouchableOpacity onPress={onPress}>
      <DropShadow style={s.container}>
        <Text
          style={
            secondary ? Typography.BUTTON.SECONDARY : Typography.BUTTON.PRIMARY
          }>
          {label}
        </Text>
      </DropShadow>
    </TouchableOpacity>
  );
};

const styles = secondary =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 20,
      paddingHorizontal: 14,
      backgroundColor: secondary ? Colors.WHITE_COLOR : Colors.PRIMARY_COLOR,
      borderRadius: 23,
    },
  });

export default Button;
