import * as React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {Colors, Typography} from '../../styles';

const Button = ({label, secondary, onPress}) => {
  const s = styles(secondary);

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={s.container}>
        <Text
          style={
            secondary ? Typography.BUTTON.SECONDARY : Typography.BUTTON.PRIMARY
          }>
          {label}
        </Text>
      </View>
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
