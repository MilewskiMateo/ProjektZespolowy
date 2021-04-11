import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import {Colors} from '../../../styles';

import Icon from '../../../utils/Icon';

const BottomTabBarButton = ({icon, color = Colors.DARK_COLOR, onPress}) => {
  const iconSize = 27;
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name={icon} size={iconSize} color={color} />
    </TouchableOpacity>
  );
};

export default BottomTabBarButton;
