import React from 'react';
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../constants/DefaultProps';
import {Item, Input, Icon} from 'native-base';
import Text from '../config/AppText';
import CountryPicker, {
  getAllCountries,
} from 'react-native-country-picker-modal';
import NavigationService from '../navigation/NavigationService';

const COUNTRY = ['NG'];
export class PhoneNumber extends React.Component {
  constructor(props) {
    super(props);
    let userLocaleCountryCode = 'NG';
    let cca2 = userLocaleCountryCode;
    let callingCode = null;
    getAllCountries()
      .then(country => country.filter(e => COUNTRY.includes(e.cca2)))
      .then(country => {
        if (!cca2 || !country) {
          this.setState({callingCode: '234', cca2: 'NG'});
        } else {
          this.setState({callingCode: country[0].callingCode[0]});
        }
      });

    this.state = {
      error: undefined,
      validationErr: false,
      cca2,
      callingCode,
      isProcessing: false,
      validationErr: false,
      phone: undefined,
      visible: false,
      countryCode: 'NG',
      withFilter: true,
      withFlag: true,
      withCountryNameButton: true,
      withAlphaFilter: true,
      withCallingCode: true,
      withEmoji: true,
    };
  }

  UNSAFE_componentWillReceiveProps(prevProps) {
    const {countryCode} = this.state;
    if (prevProps.validate && this.props.validate !== prevProps.validate) {
      this.props.generateOTP(prevProps.otpCredentials);
    }
    if (prevProps.verified && this.props.verified !== prevProps.verified) {
      this.props.navigation.navigate('Name');
      this.setState({isProcessing: false});
    }
    if (prevProps.status == false && this.props.status !== prevProps.status) {
      this.setState({
        isProcessing: false,
        validationErr: prevProps.message.trim(),
      });
    }
    if (prevProps.token && this.props.token !== prevProps.token) {
      if (prevProps.verified == false) {
        this.props.navigation.dispatch(NavigationService.resetAction('Verify'));
        this.setState({isProcessing: false});
      }
    }
    if (prevProps.error && this.props.error !== prevProps.error) {
      this.setState({isProcessing: false, error: prevProps.error});
    }
  }

  validateMobile = () => {
    const {callingCode} = this.state;
    const {mobile} = this.props;
    if (!mobile) {
      this.setState({
        validationErr: 'Oops! Phone number field cannot be empty',
      });
      return;
    }
    this.setState({error: undefined, isProcessing: true});
    if (!this.props.mobile || this.props.mobile == '') {
      return alert('please enter your phone number');
    }
    this.setState({isProcessing: true});
    this.props.validateMobile(`+${callingCode}`);
  };

  openModal = () => {
    this.setState({visible: true});
  };
  render() {
    const onSelect = value => {
      // this.props.countryCode(value.cca2);
      this.setState({
        cca2: value.cca2,
        callingCode: value.callingCode,
        countryCode: value.cca2,
        visible: true,
      });
    };
    const onClose = _ => this.setState({visible: false});
    const {
      visible,
      callingCode,
      countryCode,
      withFilter,
      withFlag,
      withCountryNameButton,
      withAlphaFilter,
      withCallingCode,
      withEmoji,
    } = this.state;
    const {mobile} = this.props;
    const {validationErr, isProcessing} = this.state;
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.mainContainer}>
          <View style={styles.inputContainer}>
            <View>
              <Text style={styles.inputHolder}>Phone Number</Text>
              <Item
                style={styles.inputTxt}
                error={
                  ((mobile === undefined || mobile === '') && validationErr) ||
                  validationErr
                    ? true
                    : false
                }
                rounded>
                <TouchableOpacity
                  style={styles.inputAddon}
                  onPress={this.openModal}>
                  <CountryPicker
                    {...{
                      countryCode,
                      withFilter,
                      withAlphaFilter,
                      withCallingCode,
                      onSelect,
                      onClose,
                    }}
                    visible={visible}
                  />
                  <Text style={styles.addonTxt}>{callingCode}</Text>
                  <Icon style={styles.addonTxt} name="ios-arrow-down" />
                </TouchableOpacity>
                <Input
                  onChangeText={mobile => this.props.onChangeText(mobile)}
                  autoCapitalize={'none'}
                  keyboardType={'number-pad'}
                  placeholder={'123 456 7890'}
                  placeholderTextColor={colors.btnDisabled}
                  style={styles.input}
                />
              </Item>
            </View>
            {validationErr && (
              <Text style={styles.validationTxt}>{validationErr}</Text>
            )}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  inputTxt: {
    backgroundColor: '#F7F7F7',
    height: 50,
    // padding: 10,
    margin: 8,
  },

  h1: {
    fontSize: 20,
    fontFamily: fonts.merriweatherRegular,
  },
  subTxt: {
    fontSize: 14,
    color: colors.gray,
    textAlign: 'center',
  },
  inputContainer: {
    marginTop: 20,
  },
  input: {
    height: 50,
    fontFamily: fonts.nunitoRegular,
    fontSize: 13,
  },
  inputHolder: {
    fontFamily: fonts.nunitoBold,
    fontSize: 16,
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  border1: {
    borderWidth: 0.7,
    height: 1,
    width: '45%',
    flexDirection: 'row',
    borderColor: '#E4E4E4',
    alignSelf: 'center',
  },
  border2: {
    borderWidth: 0.7,
    height: 1,
    width: '45%',
    flexDirection: 'row',
    borderColor: '#E4E4E4',
    alignSelf: 'center',
  },
  btnContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: 60,
    width: '100%',
  },
  btn: {
    marginTop: 20,
  },
  btnText: {
    color: colors.white,
    fontWeight: '500',
  },
  socialLogin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
  },
  googleBtn: {
    backgroundColor: colors.white,
    width: '45%',
  },
  facebookBtn: {
    backgroundColor: colors.facebook,
    width: '45%',
  },
  shadow: {
    borderWidth: 1,
    borderRadius: 4,
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 1,
    borderLeftWidth: 12,
    borderLeftColor: '#000000',
  },
  progressContainer: {
    height: 3,
    borderColor: '#E4E4E4',
    backgroundColor: '#E4E4E4',
    borderWidth: 0.9,
    borderRadius: 2,
    width: '100%',
  },
  progress: {
    height: 2,
    width: '30%',
    backgroundColor: colors.success,
  },
  inputAddon: {
    height: '100%',
    width: 95,
    backgroundColor: '#20494C',
    borderTopLeftRadius: 50 / 2,
    borderBottomLeftRadius: 50 / 2,
    justifyContent: 'space-evenly',
    paddingHorizontal: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  addonTxt: {
    color: colors.white,
    fontSize: 12,
    fontFamily: fonts.nunitoBold,
  },
  countryModal: {
    backgroundColor: 'transparent',
  },
  validationTxt: {
    color: colors.danger,
    textAlign: 'center',
    paddingHorizontal: 30,
  },
});

export default PhoneNumber;
