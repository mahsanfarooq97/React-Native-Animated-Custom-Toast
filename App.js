/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';

import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';


import AnimatedToast from './Component/AnimatedToast/AnimatedToast';


const App = () => {

  return (
    <SafeAreaView style={styles.container}>
        <AnimatedToast/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
flex:1,
justifyContent:'center',alignItems:'center'
  },
});

export default App;
