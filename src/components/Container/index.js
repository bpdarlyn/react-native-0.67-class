// React Libraries
import React from 'react';

// React Native Libraries
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

// Custom Modules
import styles from './styles';

const Container = props => {
  //
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {props.children}
    </SafeAreaView>
  );
};

export default Container;
