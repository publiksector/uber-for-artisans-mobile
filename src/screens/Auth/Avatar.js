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
import { Item, Input, Thumbnail } from 'native-base';
import Text from '../../config/AppText';
import ImagePicker from 'react-native-image-crop-picker';
import NavigationService from '../../navigation/NavigationService';

export class Avatar extends React.Component {
    state = {
        isProccessing: false,
        validationErr: false,
        avatar: {
            uri: undefined,
            base64: undefined,
            mime: undefined,
        },
    }

    UNSAFE_componentWillReceiveProps(prevProps){
        if (prevProps.authenticated && prevProps.authenticated != this.props.authenticated) {
            this.props.navigation.dispatch(NavigationService.resetAction('OnBoard1'));
        }
    }

    openGallery = () => {
        ImagePicker.openPicker({
            cropping: true,
            includeBase64: true,
        }).then(image => {
            this.setState({
                avatar: {
                    uri: image.path,
                    base64: image.data,
                    mime: image.mime
                }
            });
        });
    }
    doRegister = () => {
        this.setState({ isProccessing: true, });
        const { credentials, token, } = this.props;
        const { avatar } = this.state;
        var obj = Object.assign(credentials, { avatar: avatar.base64 });
        return this.props.doRegister(credentials, token);
    }
    render() {
        const { avatar: { uri, }, isProccessing, } = this.state;
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View style={{ flex: 1 }}>
                    <View style={styles.welcome}>
                        <Text style={styles.h1}>Upload an Avatar</Text>
                        <Text style={styles.subTxt}>Pictures build trust</Text>
                    </View>

                    <View style={styles.thumbnail}>
                        {uri && <Thumbnail
                            style={styles.avatar}
                            source={{ uri }}
                        />}
                        {!uri && <View style={styles.noAvatar}>
                            <Text style={styles.noAvatarText}>TO</Text>
                        </View>}
                        <Button
                            shadow
                            onPress={this.openGallery}
                            style={styles.textBtn}
                            BtnTextStyles={styles.loginTxt}
                            BtnText={'Browse'}
                        />
                    </View>

                    <View style={styles.btnContainer}>
                        <View style={styles.progressContainer}>
                            <View style={styles.progress}></View>
                        </View>
                        <Button
                            onPress={this.doRegister}
                            disabled={!uri ? true : false}
                            style={styles.btn}
                            loading={isProccessing}
                            BtnTextStyles={styles.btnText}
                            BtnText={'Finish Signup'}
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
    thumbnail: {
        marginTop: 80,
        alignItems: 'center',
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
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 80 / 2,
        marginBottom: 50,
    },
    noAvatar: {
        width: 80,
        height: 80,
        borderRadius: 80 / 2,
        backgroundColor: '#65B9E5',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 50,
        borderWidth: 2,
        borderColor: colors.default,
    },
    noAvatarText: {
        fontSize: 32,
        fontFamily: fonts.nunitoBold,
        color: colors.white,
    },
})

const mapStateToProps = state => ({
    credentials: state.register.credentials,
    authenticated: state.user.authenticated,
    token: state.register.token,
    error: state.register.error,
})

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Avatar);