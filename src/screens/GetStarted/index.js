import React from 'react';
import {
    View,
    ImageBackground,
    StyleSheet,
} from 'react-native';
import { colors, fonts } from '../../constants/DefaultProps';
import Button from '../../components/Button';
import Text from '../../config/AppText';
import { GoogleIcon, FacebookIcon } from '../Assets';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Notify from '../../components/Notify';

export class GetStarted extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Notify
                    title="Welcome to Artisan App"
                    message={`We connect customers to artisans at their convinience, in just a click!`}
                    duration={8000}
                />
                <ImageBackground
                    style={styles.bg}
                    source={require('../../imgs/bg.jpeg')}
                >
                    <View style={styles.textContainer}>
                        <Text style={styles.h1}>Artisans</Text>
                        <Text style={styles.h2}>Connecting customers to artisans at their convinience</Text>
                    </View>


                    <View style={styles.btnContainer}>
                        {/* <Button
                            onPress={() => this.props.navigation.navigate('Login')}
                            style={styles.loginBtn}
                            BtnTextStyles={styles.loginTxt}
                            BtnText={'Sign in'}
                        /> */}
                        <Button
                            style={styles.facebookBtn}
                            BtnTextStyles={styles.btnText}
                            shadow
                            Icon={<FacebookIcon />}
                        />
                        <Button
                            style={styles.googleBtn}
                            BtnTextStyles={styles.btnText}
                            shadow
                            Icon={<GoogleIcon />}
                        />
                        <Button
                            onPress={() => this.props.navigation.navigate('Phone')}
                            style={styles.btn}
                            BtnTextStyles={styles.btnText}
                            BtnText={'Sign up'}
                        />
                        <View style={styles.loginTxtContainer}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Login')}
                                activeOpacity={0.8}
                            >
                                <Text style={styles.loginTxt}>Already have an account? Sign in</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </ImageBackground>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bg: {
        flex: 1,
        // opacity: 0.8,
        backgroundColor: colors.default,
    },
    h1: {
        color: colors.white,
        fontSize: 32,
        fontWeight: '600',
        fontFamily: fonts.nunitoBold,
    },
    h2: {
        color: colors.white,
        fontSize: 16,
        // fontWeight: '300',
        marginTop: 20,
        paddingHorizontal: 60,
        textAlign: 'center'
    },
    textContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        // position:
    },
    btn: {
        marginTop: 20,
    },
    btnText: {
        color: colors.white,
        fontWeight: '500',
        fontFamily: fonts.nunitoBold,
    },
    loginBtn: {
        backgroundColor: 'transparent',
        borderColor: colors.white,
        borderWidth: 2,
    },
    loginTxtContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    loginTxt: {
        color: colors.white,
    },
    btnContainer: {
        width: '100%',
        padding: 30,
        position: 'absolute',
        bottom: '5%',
    },
    googleBtn: {
        backgroundColor: colors.white,
        width: '100%',
        marginTop: 20,
    },
    facebookBtn: {
        backgroundColor: colors.facebook,
        width: '100%',
    },
})

export default GetStarted;