import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Input, Item} from 'native-base';
import Text from '../config/AppText';
import {colors, fonts} from '../constants/DefaultProps';
function CustomInput({
  activecolor,
  placeholder,
  onChangeText,
  error,
  errorMessage,
  secureTextEntry,
}) {
  const [active, setActive] = useState('none');
  const activeColor = {
    none: '#E2E2EA',
    error: '#FF647C',
    active: activecolor ? activecolor : '#008DD5',
  };
  useEffect(() => {
    if (error) return setActive('error');
  }, [error]);
  return (
    <>
      <Item
        style={{
          ...styles.inputTxt,
          borderColor: activeColor[active],
        }}
        rounded>
        <Input
          placeholder={placeholder}
          placeholderTextColor={colors.btnDisabled}
          style={styles.input}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          onFocus={() => setActive('active')}
          onEndEditing={() => setActive('none')}
        />
      </Item>
      {errorMessage && <Text style={styles.text3}>{errorMessage}</Text>}
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    fontFamily: fonts.nunitoRegular,
    fontSize: 13,
  },

  inputTxt: {
    backgroundColor: '#F7F7F7',
    height: 50,
    padding: 10,
    margin: 8,
  },

  text3: {
    color: colors.error,
    fontSize: 16,
    padding: 10,
  },

  inputHolder: {
    fontFamily: fonts.nunitoBold,
    fontSize: 16,
  },
});

export default CustomInput;
