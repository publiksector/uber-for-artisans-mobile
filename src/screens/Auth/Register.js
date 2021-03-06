import React from 'react';
import {
    View,
    ImageBackground,
    StyleSheet,
    ScrollView,
} from 'react-native';
import { colors, fonts } from '../../constants/DefaultProps';
import Button from '../../components/Button';
import { Item, Input, Icon } from 'native-base';
import Text from '../../config/AppText';
import { getPhoneNumber } from 'react-native-device-info';

export class Register extends React.Component {
    state = {
        isProccessing: false,
        validationErr: false,
        phone: undefined,
    }
    componentDidMount(){
        this.getPhone();
    }
    getPhone = () => {
        getPhoneNumber().then(e => alert(e))
    }
    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.welcome}>
                    <Text style={styles.h1}>What's your phone number</Text>
                    <Text style={styles.subTxt}>We just want to verify you</Text>
                </View>

                {this.state.validationErr && <Text style={{ color: colors.danger }}>One or more fields are missing</Text>}
                {this.state.pwMatchErr && <Text style={{ color: colors.danger }}>Password and confirm password does not match</Text>}

                <View style={styles.mainContainer}>
                    <View style={styles.inputContainer}>
                        <View>
                            <Text style={styles.inputHolder}>Phone Number</Text>
                            <Item
                                style={styles.inputTxt}
                                // error={(this.firstname === undefined || this.lastname === '') && this.state.validationErr}
                                rounded>
                                <View style={styles.inputAddon}>
                                    <Text style={styles.addonTxt}>+234</Text>
                                    <Icon style={styles.addonTxt} name="ios-arrow-down" />
                                </View>
                                <Input
                                    onChangeText={e => this.setState({ phone: e })}
                                    autoCapitalize={'none'}
                                    placeholder={'123 456 7890'}
                                    placeholderTextColor={colors.btnDisabled}
                                    style={styles.input}
                                />
                            </Item>
                        </View>
                    </View>

                    {/* <View style={styles.container2}>
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
                    </View> */}
                </View>

                <View style={styles.btnContainer}>
                    <View style={styles.progressContainer}>
                        <View style={styles.progress}></View>
                    </View>
                    <Button
                        onPress={() => this.props.navigation.navigate('Verify')}
                        disabled={!this.state.phone ? true : false}
                        style={styles.btn}
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
        width: 80,
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
    },
})

export default Register;