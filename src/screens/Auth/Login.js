import React from 'react';
import {
    View,
    ImageBackground,
    StyleSheet,
    ScrollView,
} from 'react-native';
import { colors, fonts } from '../../constants/DefaultProps';
import Button from '../../components/Button';
import { Item, Input } from 'native-base';
import Text from '../../config/AppText';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GoogleIcon, FacebookIcon } from '../Assets';

export class Login extends React.Component {
    state = {
        isProccessing: false,
        validationErr: false,
    }
    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <SafeAreaView>
                    <View style={styles.welcome}>
                        <Text style={styles.h1}>Welcome back!</Text>
                        <Text style={styles.subTxt}>Log in to get book any artisan at an affortable and secure way</Text>
                    </View>

                    {this.state.validationErr && <Text style={{ color: colors.danger }}>One or more fields are missing</Text>}
                    {this.state.pwMatchErr && <Text style={{ color: colors.danger }}>Password and confirm password does not match</Text>}

                    <View style={styles.inputContainer}>
                        <View>
                            <Text style={styles.inputHolder}>Email</Text>
                            <Item
                                style={styles.inputTxt}
                                error={(this.firstname === undefined || this.lastname === '') && this.state.validationErr}
                                rounded>
                                <Input
                                    onChangeText={e => this.firstname = e}
                                    autoCapitalize={'none'}
                                    placeholder={'Your email'}
                                    placeholderTextColor={colors.btnDisabled}
                                    style={styles.input}
                                />
                            </Item>
                        </View>

                        <View style={{ marginVertical: 10 }}>
                            <Text style={styles.inputHolder}>Password</Text>
                            <Item
                                style={styles.inputTxt}
                                error={(this.email === '') && this.state.validationErr}
                                rounded>
                                <Input
                                    onChangeText={e => this.email = e}
                                    autoCapitalize={'none'}
                                    placeholder={'********'}
                                    secureTextEntry={true}
                                    placeholderTextColor={colors.btnDisabled}
                                    style={styles.input}
                                />
                            </Item>
                        </View>
                    </View>

                    <View style={styles.container2}>
                        <View style={styles.border1}></View>
                        <View style={styles.or}><Text>OR</Text></View>
                        <View style={styles.border2}></View>
                    </View>


                    <View style={styles.socialLogin}>
                        <Button
                            style={styles.googleBtn}
                            BtnTextStyles={styles.btnText}
                            shadow
                            Icon={<GoogleIcon />}
                        />
                        <Button
                            style={styles.facebookBtn}
                            BtnTextStyles={styles.btnText}
                            shadow
                            Icon={<FacebookIcon />}
                        />
                    </View>

                    <View style={styles.btnContainer}>
                        <Button
                            style={styles.btn}
                            BtnTextStyles={styles.btnText}
                            BtnText={'Log In'}
                        />
                    </View>
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
})

export default Login;