/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { ScrollView } from 'react-native';
import styles from './style';
import data from './Data';
import Square from './Square';

export default () => {
  return (
    <ScrollView style={styles.container}>
      {data.map((item, index) => (
        <Square key={item} text={`Square ${index + 1}`}/>
      ))}
    </ScrollView>
  );
};