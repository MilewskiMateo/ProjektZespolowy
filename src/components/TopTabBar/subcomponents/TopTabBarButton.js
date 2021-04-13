import * as React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import {Colors, Typography} from '../../../styles';

import Icon from '../../../utils/Icon';

const TopTabBarButton = ({icon, label, selected, onPress}) => {
  const s = styles(selected);
  const iconSize = 20;

  return (
    <TouchableOpacity onPress={onPress}>
      <DropShadow style={s.shadow}>
        <View style={s.container}>
          <Icon name={icon} size={iconSize} color={s.label.color} />
          <Text style={[Typography.HEADERS.H4, s.label]}>{label}</Text>
        </View>
      </DropShadow>
    </TouchableOpacity>
  );
};

const styles = selected =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 20,
      paddingHorizontal: 14,
      backgroundColor: selected ? Colors.PRIMARY_COLOR : Colors.WHITE_COLOR,
      borderRadius: 23,
    },
    label: {
      marginLeft: 8,
      color: selected ? Colors.WHITE_COLOR : Colors.DARK_COLOR,
    },
    shadow: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.09,
      shadowRadius: 47,
    },
  });

export default TopTabBarButton;
