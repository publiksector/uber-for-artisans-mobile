import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import Text from '../../config/AppText';
import {CloseIcon, BackIcon} from '../Assets';
import Button from '../../components/Button';
import {colors, fonts} from '../../constants/DefaultProps';
import CustomInput from '../../components/CustomInput';

function HomeAddress(props) {
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <View style={styles.navContent}>
          <View style={styles.navChild}>
            <TouchableOpacity
              onPress={() => props.customBack()}
              style={styles.icon}>
              <BackIcon />
            </TouchableOpacity>
            <View>
              <Text style={styles.text1}>Personal Info</Text>
            </View>
            <TouchableOpacity
              onPress={() => props.customBack()}
              activeOpacity={0.8}
              style={styles.icon}>
              <CloseIcon />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* end of header */}
      <View style={{...styles.container}}>
        <View style={{height: '40%', backgroundColor: colors.btnColor}} />
        <View style={{marginVertical: 40, marginHorizontal: 20}}>
          <Text style={styles.inputHolder}>Home</Text>
          <CustomInput placeholder="Add your home address" />
        </View>
        {/* Button */}
        <View
          style={{
            marginVertical: 40,
            paddingHorizontal: 20,
            flex: 1,
            justifyContent: 'flex-end',
            marginBottom: 36,
          }}>
          <Button
            style={styles.btn}
            disabled={true ? true : false}
            shadow
            loading={false}
            BtnTextStyles={styles.btnText}
            BtnText={'Add Home'}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nav: {
    zIndex: 1000,
    height: '15%',
    width: '100%',
    backgroundColor: colors.navColor,
  },
  btnText: {
    color: colors.white,
    fontWeight: '500',
  },
  navContent: {
    height: '100%',
    justifyContent: 'flex-end',
  },
  navChild: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 10,
    alignItems: 'flex-start',
  },

  icon: {
    justifyContent: 'center',
  },

  text1: {
    color: colors.white,
    fontFamily: fonts.nunitoMedium,
    fontSize: 17,
  },
  text2: {
    color: colors.default,
    fontFamily: fonts.nunitoMedium,
    fontSize: 18,
    marginVertical: 5,
  },
  text3: {
    color: colors.default,
    fontSize: 16,
    padding: 10,
  },
});
export default HomeAddress;
