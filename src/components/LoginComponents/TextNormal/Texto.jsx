import React from 'react';
import { Text } from 'react-native';

const Texto = ({ children, style }) => {
  return <Text style={style}>{children}</Text>;
};

export default Texto;
