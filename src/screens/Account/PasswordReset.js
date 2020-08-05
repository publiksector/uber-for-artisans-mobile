import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import Text from '../../config/AppText';
import {CloseIcon, BackIcon} from '../Assets';
import Button from '../../components/Button';
import {colors, fonts} from '../../constants/DefaultProps';
import CustomInput from '../../components/CustomInput';

function PasswordReset(props) {
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <View style={styles.navContent}>
          <View style={styles.navChild}>
            <TouchableOpacity
              onPress={() => props.navigation.goBack()}
              style={styles.icon}>
              <BackIcon />
            </TouchableOpacity>
            <View>
              <Text style={styles.text1}>Change Password</Text>
            </View>
            <TouchableOpacity
              onPress={() => props.navigation.goBack()}
              activeOpacity={0.8}
              style={styles.icon}>
              <CloseIcon />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* end of header */}
      <ScrollView contentContainerStyle={{...styles.container}}>
        <View style={{marginTop: 20, marginBottom: 40}}>
          <Text style={{...styles.text2, textAlign: 'center'}}>
            Hope you don’t forget this one
          </Text>
        </View>
        <View style={{marginVertical: 10, marginHorizontal: 20}}>
          <Text style={styles.inputHolder}>Old password</Text>
          <CustomInput secureTextEntry activecolor="#00C48C" />
        </View>

        <View style={{marginVertical: 10, marginHorizontal: 20}}>
          <Text style={styles.inputHolder}>New password</Text>
          <CustomInput secureTextEntry activecolor="#00C48C" error />
        </View>

        <View style={{marginVertical: 10, marginHorizontal: 20}}>
          <Text style={styles.inputHolder}>Confirm new password</Text>
          <CustomInput
            secureTextEntry
            activecolor="#00C48C"
            error
            errorMessage="Your passwords don’t match. Try again"
          />
        </View>
        {/* Button */}
        <View
          style={{
            marginVertical: 50,
            paddingHorizontal: 20,
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <Button
            style={styles.btn}
            disabled={true ? true : false}
            shadow
            loading={false}
            BtnTextStyles={styles.btnText}
            BtnText={'Change Password'}
          />
        </View>
      </ScrollView>
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
    color: colors.textblack,
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
export default PasswordReset;
