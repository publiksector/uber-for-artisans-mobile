import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import Text from '../../config/AppText';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {CloseIcon, BackIcon, AddIcon, CircleAdd} from '../Assets';
import Button from '../../components/Button';
import {Thumbnail, Item, Icon, Input} from 'native-base';
import ImagePicker from 'react-native-image-crop-picker';
import {colors, fonts} from '../../constants/DefaultProps';
import PhoneNumber from '../../components/PhoneNumber';
import CustomInput from '../../components/CustomInput';
import HomeAddress from './HomeAddres';
function PersonalInfo(props) {
  const [avatar, setAvatar] = useState({});
  const [currentView, setCurrentView] = useState('form');

  const openGallery = () => {
    ImagePicker.openPicker({
      cropping: true,
      includeBase64: true,
    }).then(image => {
      setAvatar({
        uri: image.path,
        base64: image.data,
        mime: image.mime,
      });
    });
  };
  return (
    <>
      {currentView == 'form' && (
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
                  <Text style={styles.text1}>Personal Info</Text>
                </View>
                <View style={styles.icon}>
                  <CloseIcon />
                </View>
              </View>
            </View>
          </View>
          {/* end of header */}

          <ScrollView style={{...styles.container}}>
            {/* profile picture */}

            <View style={styles.thumbnail}>
              {avatar.uri && (
                <View style={styles.avatar}>
                  <Thumbnail
                    style={{width: '100%', height: '100%', borderRadius: 50}}
                    source={{uri: avatar.uri}}
                  />
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={openGallery}
                    style={{position: 'absolute', top: hp(8), right: wp(-3)}}>
                    <CircleAdd />
                  </TouchableOpacity>
                </View>
              )}
              {!avatar.uri && (
                <View style={styles.noAvatar}>
                  <Text style={styles.noAvatarText}>TO</Text>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={openGallery}
                    style={{position: 'absolute', top: hp(8), right: wp(-3)}}>
                    <CircleAdd />
                  </TouchableOpacity>
                </View>
              )}
            </View>
            <View style={{paddingHorizontal: 20}}>
              {/* First name & Last Name */}
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{width: '50%'}}>
                  <Text style={styles.inputHolder}>First name</Text>
                  <CustomInput placeholder="John" />
                </View>

                <View style={{width: '50%'}}>
                  <Text style={styles.inputHolder}>Last name</Text>
                  <CustomInput placeholder="Snow" />
                </View>
              </View>
              {/* Phone Number */}
              <PhoneNumber onChangeText={value => console.log(value)} />
              {/* Email */}
              <View style={{marginVertical: 20}}>
                <Text style={styles.inputHolder}>Email</Text>
                <CustomInput placeholder="Add an email for password recovery" />
              </View>
            </View>
            {/* Add address */}
            <View style={styles.address}>
              <Text
                onPress={() => setCurrentView('address')}
                style={{...styles.text2, textAlign: 'center'}}>
                Add a home address
              </Text>
            </View>

            {/* Button */}
            <View style={{marginVertical: 40, paddingHorizontal: 20}}>
              <Button
                style={styles.btn}
                disabled={true ? true : false}
                shadow
                loading={false}
                BtnTextStyles={styles.btnText}
                BtnText={'Save'}
              />
            </View>
          </ScrollView>
        </View>
      )}

      {currentView == 'address' && (
        <HomeAddress customBack={() => setCurrentView('form')} />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
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
  input: {
    height: 50,
    fontFamily: fonts.nunitoRegular,
    fontSize: 13,
  },
  icon: {
    justifyContent: 'center',
  },
  address: {
    marginVertical: 20,
    paddingVertical: 13,
    borderBottomWidth: 2,
    borderBottomColor: '#e4e4e47a',
    borderTopWidth: 2,
    borderTopColor: '#e4e4e47a',
  },
  inputTxt: {
    backgroundColor: '#F7F7F7',
    height: 50,
    padding: 10,
    margin: 8,
  },
  inputHolder: {
    fontFamily: fonts.nunitoBold,
    fontSize: 16,
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
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 50,
    borderWidth: 2.5,
    borderColor: colors.default,
  },

  noAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#65B9E5',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
    borderWidth: 2.5,
    borderColor: colors.default,
    position: 'relative',
  },
  thumbnail: {
    marginTop: 25,
    alignItems: 'center',
  },
});
export default PersonalInfo;
