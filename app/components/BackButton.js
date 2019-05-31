import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import BackIcon from '../assets/back.png';

export default class BackButton extends Component {
  render() {
    return <Image source={BackIcon} style={styles.icon} />;
  }
}

const styles = StyleSheet.create({
  icon: {
    marginLeft: 20,
    width: 20,
    height: 16
  }
});
