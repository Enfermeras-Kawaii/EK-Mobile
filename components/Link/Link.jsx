import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const Link = ({ onPress, children }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.link}>{children}</Text>
    </TouchableOpacity>
  );
};
export default Link;