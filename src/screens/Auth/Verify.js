import React from 'react';
import {
    View,
    ImageBackground,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions';
import { colors, fonts } from '../../constants/DefaultProps';
import Button from '../../components/Button';
import Text from '../../config/AppText';
import { SafeAreaView } from 'react-native-safe-area-context';
import OTPTextView from 'react-native-otp-textinput';
import Alert from '../../components/Alert';
import { SuccessIcon, } from '../Assets';

export class Verify extends React.Component {
    state = {
        isProccessing: false,
        validationErr: false,
        token: '',
    }
    UNSAFE_componentWillReceiveProps(prevProps) {
        if (prevProps.status && prevProps.status != this.props.status) {
            this.props.navigation.navigate('Name');
        }
    }
    handleChange = (e) => {
        this.setState({ token: e }, () => {
            // const { token } = this.state;
            const { token } = this.props;
            if (token && token.length == 4) {
                // this.props.navigation.navigate('Name');
                return this.props.verifyOTP({ statusCode: this.state.token }, token);
            }
        });
    }
    resend = () => {
        this.props.generateOTP(this.props.otpCredentials);
    }
    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <SafeAreaView>
                    <View style={styles.split}>
                        <View style={styles.welcome}>
                            <Text style={styles.h1}>Let's verify your 0701 234 5678</Text>
                            <Text style={styles.subTxt}>This would only take a second</Text>
                        </View>

                        {/* {this.state.validationErr && <Text style={{ color: colors.danger }}>One or more fields are missing</Text>}
                        {this.state.pwMatchErr && <Text style={{ color: colors.danger }}>Password and confirm password does not match</Text>} */}

                        <View style={styles.inputContainer}>
                            <OTPTextView
                                containerStyle={styles.otpInputContainer}
                                textInputStyle={styles.otpTextInput}
                                handleTextChange={this.handleChange}
                                inputCount={4}
                                tintColor={'#A4A4A4'}
                                keyboardType="numeric"
                            />
                        </View>

                        <View style={styles.btnContainer}>
                            <View style={styles.progressContainer}>
                                <View style={styles.progress}></View>
                            </View>
                            {/* <View style={styles.actionBtn}>
                                <Button
                                    shadow
                                    onPress={() => this.props.navigation.navigate('Name')}
                                    style={styles.textBtn}
                                    BtnTextStyles={styles.loginTxt}
                                    BtnText={'Text me'}
                                />
                                <Button
                                    shadow
                                    onPress={() => this.props.navigation.navigate('Name')}
                                    style={styles.whatsappBtn}
                                    BtnTextStyles={styles.btnText}
                                    BtnText={'Whatsapp me'}
                                />
                            </View> */}
                            <View style={styles.resendTextContainer}>
                                <TouchableOpacity
                                    onPress={this.resend}
                                    activeOpacity={0.8}
                                >
                                    <Text style={styles.resendText1}>I didn't get it. <Text style={styles.resendText2}>Resend</Text></Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <Alert
                        isVisible={false}
                    >
                        <SuccessIcon />
                        <Text style={styles.alertTxt}>Success</Text>
                    </Alert>
                </SafeAreaView>
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
    split: {
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    inputTxt: {
        backgroundColor: "#F7F7F7",
        height: 50,
        padding: 10,
        margin: 8
    },
    welcome: {
        alignItems: 'center',
        marginTop: 50,
    },
    h1: {
        fontSize: 20,
        fontFamily: fonts.merriweatherRegular,
    },
    subTxt: {
        marginTop: 5,
        fontSize: 14,
        color: colors.gray,
        textAlign: 'center',
    },
    inputContainer: {
        alignItems: 'center',
        justifyContent: 'center',
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
    btnContainer: {
        marginTop: 60,
        width: '100%',
        zIndex: 500,
        elevation: 8,
    },
    btn: {
        marginTop: 20,
    },
    btnText: {
        color: colors.white,
        fontWeight: '500',
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
        width: '40%',
        backgroundColor: colors.success,
    },
    otpInputContainer: {
        marginTop: 50,
    },
    otpTextInput: {
        height: 40
    },
    textBtn: {
        backgroundColor: colors.white,
        borderColor: colors.default,
        borderWidth: 1,
        width: '45%',
    },
    loginTxt: {
        color: colors.default,
        fontWeight: '500',
    },
    whatsappBtn: {
        width: '45%',
    },
    actionBtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    alertTxt: {
        marginTop: 10,
        fontSize: 16,
    },
    resendTextContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    resendText1: {
        color: colors.txtGray,
        fontFamily: fonts.nunitoBold,
    },
    resendText2: {
        textDecorationLine: 'underline',
        color: colors.default,
        fontFamily: fonts.nunitoBold,
    },
})

const mapStateToProps = state => ({
    status: state.register.status,
    token: state.register.token,
    otpCredentials: state.register.otpCredentials,
})

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Verify);