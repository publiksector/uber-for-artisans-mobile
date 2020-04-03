import React from 'react';
import {
    View,
    ImageBackground,
    StyleSheet,
} from 'react-native';
import { colors } from '../../constants/DefaultProps';
import Button from '../../components/Button';
import Text from '../../config/AppText';

export class Onboard extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={styles.bg}
                    source={require('../../imgs/bg.jpeg')}
                >
                    <View style={styles.textContainer}>
                        <Text style={styles.h1}>Artisans</Text>
                        <Text style={styles.h2}>Connecting customers to artisans of their choice</Text>
                    </View>


                    <View style={styles.btnContainer}>
                        <Button
                            onPress={() => this.props.navigation.navigate('Login')}
                            style={styles.loginBtn}
                            BtnTextStyles={styles.loginTxt}
                            BtnText={'Sign in'}
                        />
                        <Button
                            onPress={() => this.props.navigation.navigate('Register')}
                            style={styles.btn}
                            BtnTextStyles={styles.btnText}
                            BtnText={'Get Started'}
                        />
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
        opacity: 0.8,
        backgroundColor: colors.default,
    },
    h1: {
        color: colors.white,
        fontSize: 32,
        fontWeight: '600'
    },
    h2: {
        color: colors.white,
        fontSize: 16,
        fontWeight: '300',
        marginTop: 20,
        paddingHorizontal: 80,
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
    },
    loginBtn: {
        backgroundColor: 'transparent',
        borderColor: colors.white,
        borderWidth: 2,
    },
    loginTxt: {
        color: colors.white,
        fontWeight: '500',
    },
    btnContainer: {
        width: '100%',
        padding: 30,
        position: 'absolute',
        bottom: '5%',
    }
})

export default Onboard;