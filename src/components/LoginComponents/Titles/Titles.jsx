import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const Titles = ({ children }) => {

  return <Text style={styles.titulo}>{children}</Text>
      
    
  
};

export default Titles;