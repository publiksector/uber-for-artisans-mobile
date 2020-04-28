import React from 'react';
import {
    View,
    ImageBackground,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions';
import { colors, fonts } from '../../constants/DefaultProps';
import Button from '../../components/Button';
import { Item, Input, Icon } from 'native-base';
import Text from '../../config/AppText';
import DeviceInfo, { getPhoneNumber,getISO, } from 'react-native-device-info';
import CountryPicker, { getAllCountries } from 'react-native-country-picker-modal';
import NavigationService from '../../navigation/NavigationService';

const COUNTRY = ['NG'];
export class Auth extends React.Component {
    constructor(props) {
        super(props);
        let userLocaleCountryCode = 'NG';
        let cca2 = userLocaleCountryCode;
        let callingCode = null;
        getAllCountries()
            .then((country) => country.filter(e => COUNTRY.includes(e.cca2)))
            .then((country) => {
                if (!cca2 || !country) {
                    this.setState({ callingCode: '234', cca2: 'NG' })
                } else {
                    this.setState({ callingCode: country[0].callingCode[0] })
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
    componentDidMount() {
        this.getPhone();
    }
    UNSAFE_componentWillReceiveProps(prevProps) {
        const { countryCode, } = this.state;
        if (prevProps.validate && this.props.validate !== prevProps.validate) {
            this.props.generateOTP(prevProps.otpCredentials);
        }
        if (prevProps.verified && this.props.verified !== prevProps.verified) {
            this.props.navigation.navigate('Name');
            this.setState({ isProcessing: false, });
        }
        if (prevProps.status == false && this.props.status !== prevProps.status) {
            this.setState({ isProcessing: false, validationErr: prevProps.message.trim(), });
        }
        if (prevProps.token && this.props.token !== prevProps.token) {
            if (prevProps.verified == false) {
                this.props.navigation.dispatch(NavigationService.resetAction('Verify'));
                this.setState({ isProcessing: false, });
            }
        }
        if (prevProps.error && this.props.error !== prevProps.error) {
            this.setState({ isProcessing: false, error: prevProps.error, });
        }
    }

    validateMobile = () => {
        const { callingCode, } = this.state;
        const { mobile, } = this.props;
        if (!mobile) {
            this.setState({ validationErr: "Oops! Phone number field cannot be empty", });
            return;
        }
        this.setState({ error: undefined, isProcessing: true, });
        if (!this.props.mobile || this.props.mobile == '') {
            return alert('please enter your phone number');
        }
        this.setState({ isProcessing: true, });
        this.props.validateMobile(`+${callingCode}`);
    }
    getPhone = () => {
        getPhoneNumber().then(e => console.log(e))
    }
    openModal = () => {
        this.setState({ visible: true });
    }
    render() {
        const onSelect = value => {
            // this.props.countryCode(value.cca2);
            this.setState({ cca2: value.cca2, callingCode: value.callingCode, countryCode: value.cca2, visible: true, });
        }
        const onClose = _ => this.setState({ visible: false, });
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
        const { mobile } = this.props;
        const { validationErr, isProcessing, } = this.state;
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.welcome}>
                    <Text style={styles.h1}>What's your phone number</Text>
                    <Text style={styles.subTxt}>We just want to verify you</Text>
                </View>

                <View style={styles.mainContainer}>
                    <View style={styles.inputContainer}>
                        <View>
                            <Text style={styles.inputHolder}>Phone Number</Text>
                            <Item
                                style={styles.inputTxt}
                                error={((mobile === undefined || mobile === '') && validationErr) || validationErr ? true : false}
                                rounded>
                                <TouchableOpacity
                                    style={styles.inputAddon}
                                    onPress={this.openModal}
                                >
                                    <CountryPicker
                                        {...{
                                            countryCode,
                                            withFilter,
                                            withFlag,
                                            // withCountryNameButton,
                                            withAlphaFilter,
                                            withCallingCode,
                                            withEmoji,
                                            onSelect,
                                            onClose,
                                        }}
                                        visible={visible}
                                    />
                                    <Text style={styles.addonTxt}>{callingCode}</Text>
                                    <Icon style={styles.addonTxt} name="ios-arrow-down" />
                                </TouchableOpacity>
                                <Input
                                    onChangeText={mobile => this.props.inputNumber(mobile)}
                                    autoCapitalize={'none'}
                                    keyboardType={'number-pad'}
                                    placeholder={'123 456 7890'}
                                    placeholderTextColor={colors.btnDisabled}
                                    style={styles.input}
                                />
                            </Item>
                        </View>
                        {validationErr && <Text style={styles.validationTxt}>{validationErr}</Text>}
                    </View>

                </View>

                <View style={styles.btnContainer}>
                    <View style={styles.progressContainer}>
                        <View style={styles.progress}></View>
                    </View>
                    <Button
                        onPress={() => this.props.navigation.dispatch(NavigationService.resetAction('Verify'))}
                        // onPress={this.validateMobile}
                        disabled={!mobile ? true : false}
                        style={styles.btn}
                        loading={isProcessing}
                        BtnTextStyles={styles.btnText}
                        BtnText={'Send my code here'}
                    />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        padding: 30,
    },
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    inputTxt: {
        backgroundColor: "#F7F7F7",
        height: 50,
        // padding: 10,
        margin: 8,
    },
    welcome: {
        alignItems: 'center',
        marginTop: 100,
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
        marginTop: 50,
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
        borderWidth: .7,
        height: 1,
        width: '45%',
        flexDirection: 'row',
        borderColor: '#E4E4E4',
        alignSelf: 'center'
    },
    border2: {
        borderWidth: .7,
        height: 1,
        width: '45%',
        flexDirection: 'row',
        borderColor: '#E4E4E4',
        alignSelf: 'center'
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
        width: '45%'
    },
    shadow: {
        borderWidth: 1,
        borderRadius: 4,
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 1,
        borderLeftWidth: 12,
        borderLeftColor: "#000000",
    },
    progressContainer: {
        height: 3,
        borderColor: '#E4E4E4',
        backgroundColor: '#E4E4E4',
        borderWidth: .9,
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
        paddingHorizontal: 30
    },
})

const mapStateToProps = state => ({
    validate: state.register.validate,
    status: state.register.status,
    message: state.register.message,
    verified: state.register.verified,
    mobile: state.register.mobile,
    token: state.register.token,
    otpCredentials: state.register.otpCredentials,
    error: state.register.error,
})

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Auth);