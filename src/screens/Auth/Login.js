import React from 'react';
import {
    View,
    ImageBackground,
    StyleSheet,
    ScrollView,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions';
import { colors, fonts } from '../../constants/DefaultProps';
import Button from '../../components/Button';
import { Item, Input } from 'native-base';
import Text from '../../config/AppText';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GoogleIcon, FacebookIcon } from '../Assets';
import NavigationService from '../../navigation/NavigationService';

export class Login extends React.Component {
    state = {
        isProccessing: false,
        error: undefined,
        validationErr: false,
        validationPhone: undefined,
        validationPw: undefined,
    }
    UNSAFE_componentWillReceiveProps(prevProps) {
        if (prevProps.authenticated && prevProps.authenticated != this.props.authenticated) {
            this.props.navigation.dispatch(NavigationService.resetAction('Home'));
        }
        if (prevProps.status == false && prevProps.status != this.props.status) {
            this.setState({ isProccessing: false, error: prevProps.message, });
        }
        if (prevProps.error && prevProps.error != this.props.error) {
            this.setState({ isProccessing: false, validationErr: "You seem to be offline", });
        }
    }
    doLogin = () => {
        if (!this.phone && !this.password) {
            this.setState({ validationErr: 'One or more fields is missing' });
            return;
        } else if (!this.phone) {
            this.setState({ validationErr: 'Phone number field cannot is missing' });
            return;
        } else if (!this.password) {
            this.setState({ validationErr: 'Password field cannot is missing' });
            return;
        }
        this.setState({ isProccessing: true, error: undefined, })
        this.props.doLogin({
            phoneNumber: this.phone,
            password: this.password,
        })
    }
    render() {
        const { validationErr, isProccessing, error } = this.state;
        return (
            <>
                <ScrollView contentContainerStyle={styles.container}>
                    {/* <SafeAreaView> */}
                    <View style={styles.welcome}>
                        <Text style={styles.h1}>Welcome back!</Text>
                        <Text style={styles.subTxt}>Log in and book any artisan at your comfort</Text>
                    </View>

                    {/* {this.state.validationErr && <Text style={{ color: colors.danger }}>One or more fields are missing</Text>}
                {this.state.pwMatchErr && <Text style={{ color: colors.danger }}>Password and confirm password does not match</Text>} */}

                    <View style={styles.inputContainer}>
                        <View>
                            <Text style={styles.inputHolder}>Phone Number</Text>
                            <Item
                                style={styles.inputTxt}
                                error={(this.phone === undefined || this.phone === '') && validationErr ? true : false}
                                rounded>
                                <Input
                                    onChangeText={e => this.phone = e}
                                    keyboardType={'number-pad'}
                                    placeholder={'Phone Number'}
                                    placeholderTextColor={colors.btnDisabled}
                                    style={styles.input}
                                />
                            </Item>
                        </View>

                        <View style={{ marginVertical: 10 }}>
                            <Text style={styles.inputHolder}>Password</Text>
                            <Item
                                style={styles.inputTxt}
                                error={(this.password === undefined || this.password === '') && validationErr ? true : false}
                                rounded>
                                <Input
                                    onChangeText={e => this.password = e}
                                    autoCapitalize={'none'}
                                    placeholder={'********'}
                                    secureTextEntry={true}
                                    placeholderTextColor={colors.btnDisabled}
                                    style={styles.input}
                                />
                            </Item>
                        </View>

                        {validationErr && <Text style={styles.validationTxt}>{validationErr}</Text>}
                        {error && <Text style={styles.validationTxt}>{error}</Text>}
                    </View>

                    <View style={styles.btnContainer}>
                        <Button
                            onPress={this.doLogin}
                            style={styles.btn}
                            shadow
                            loading={isProccessing}
                            BtnTextStyles={styles.btnText}
                            BtnText={'Log me in'}
                        />
                    </View>
                    {/* </SafeAreaView> */}
                </ScrollView>
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        // justifyContent: 'center',
        padding: 30,
    },
    inputTxt: {
        backgroundColor: "#F7F7F7",
        height: 50,
        padding: 10,
        margin: 8
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
        flex: 1,
        // backgroundColor:"red",
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
        // flex: 1,
        // justifyContent: 'flex-end',
        width: '100%',
    },
    btn: {
        marginTop: 20,
    },
    otpBtn: {
        backgroundColor: colors.white,
        borderColor: colors.default,
        borderWidth: 1,
        width: '100%',
    },
    btnText: {
        color: colors.white,
        fontWeight: '500',
    },
    otpBtnText: {
        color: colors.default,
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
    validationTxt: {
        color: colors.danger,
        textAlign: 'center',
        paddingHorizontal: 30
    },
})

const mapStateToProps = state => ({
    authenticated: state.user.authenticated,
    status: state.user.status,
    message: state.user.message,
    error: state.user.error,
})

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);