import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

function Switch({value, onPress}) {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <View
        style={{
          ...styles.container,
          alignItems: `${value ? 'flex-end' : 'flex-start'}`,
        }}>
        <TouchableOpacity
          onPress={onPress}
          style={{
            ...styles.circle,
            backgroundColor: `${value ? '#008DD5' : '#8FB9D1'}`,
          }}
          activeOpacity={0.8}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 35,
    width: 70,
    borderRadius: 50,
    padding: 2,
    backgroundColor: '#fff',
    flexDirection: 'column',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  circle: {
    borderRadius: 50,
    height: 30,
    width: 30,
  },
});

export default Switch;
