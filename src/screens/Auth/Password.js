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

export class Password extends React.Component {
    state = {
        isProccessing: false,
        validationErr: false,
        password: undefined,
        rePassword: undefined,
    }
    render() {
        const { password, rePassword, } = this.state;
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View style={{ flex: 1 }}>
                    <View style={styles.welcome}>
                        <Text style={styles.h1}>Create a password</Text>
                        <Text style={styles.subTxt}>Keep your account safe & secure</Text>
                    </View>

                    {this.state.validationErr && <Text style={{ color: colors.danger }}>One or more fields are missing</Text>}
                    {this.state.pwMatchErr && <Text style={{ color: colors.danger }}>Password and confirm password does not match</Text>}

                    <View style={styles.inputContainer}>
                        <View>
                            <Text style={styles.inputHolder}>Password</Text>
                            <Item
                                style={styles.inputTxt}
                                // error={(this.firstname === undefined || this.lastname === '') && this.state.validationErr}
                                rounded>
                                <Input
                                    onChangeText={e => this.setState({ password: e })}
                                    placeholder={'********'}
                                    placeholderTextColor={colors.btnDisabled}
                                    style={styles.input}
                                    secureTextEntry={true}
                                />
                            </Item>
                        </View>
                    </View>

                    <View style={{ marginVertical: 10 }}>
                        <Text style={styles.inputHolder}>Confirm Password</Text>
                        <Item
                            style={styles.inputTxt}
                            error={(this.email === '') && this.state.validationErr}
                            rounded>
                            <Input
                                onChangeText={e => this.setState({ rePassword: e })}
                                placeholder={'********'}
                                placeholderTextColor={colors.btnDisabled}
                                style={styles.input}
                                secureTextEntry={true}
                            />
                        </Item>
                    </View>

                    <View style={styles.btnContainer}>
                        <View style={styles.progressContainer}>
                            <View style={styles.progress}></View>
                        </View>
                        <Button
                            onPress={() => this.props.navigation.navigate('Avatar')}
                            disabled={password && password == rePassword ? false : true}
                            style={styles.btn}
                            BtnTextStyles={styles.btnText}
                            BtnText={'Next'}
                        />
                    </View>
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
        marginVertical: 30,
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
        width: '80%',
        backgroundColor: colors.success,
    },
})

export default Password;