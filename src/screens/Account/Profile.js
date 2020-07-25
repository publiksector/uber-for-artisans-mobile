import React from 'react';
import {
    View,
    ImageBackground,
    StyleSheet,
    StatusBar,
    Image,
} from 'react-native';
import { colors, fonts } from '../../constants/DefaultProps';
import Button from '../../components/Button';
import Text from '../../config/AppText';
import { Thumbnail, Icon, Card, Content } from 'native-base';
import img1 from '../../imgs/avatar1.jpg';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import babysitter1 from '../../imgs/babysitter3.jpeg';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { CloseIcon, BackIcon, HistoryIcon, ChatIcon, ExploreIcon, CarpenterIconSM } from '../Assets';
import Reviews from './Reviews';
import { reviews } from '../../fakers';

export class Profile extends React.Component {
    state = {
        hideTab: false,
    }
    render() {
        const { hideTab, } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.nav}>
                    <View style={styles.navContent}>
                        <View style={styles.navChild}>
                            <TouchableOpacity 
                                onPress={() => this.props.navigation.goBack()}
                                style={styles.icon}>
                                <BackIcon />
                            </TouchableOpacity>
                            <View>
                                <Text style={styles.text1}>Profile</Text>
                            </View>
                            <View style={styles.icon}>
                                <CloseIcon />
                            </View>
                        </View>
                    </View>
                </View>
                <Content contentContainerStyle={styles.contentContainer}>
                    <View style={styles.data}>
                        <Image
                            style={styles.img}
                            source={babysitter1}
                        />
                        <View style={styles.overlay}>
                            <View style={styles.onlineDot}></View>
                            <View style={styles.artisanIcon}>
                                <CarpenterIconSM />
                            </View>
                        </View>
                        <View style={styles.txtContainer}>
                            <Text style={styles.text2}>John Doe</Text>
                            <Rating
                                // onFinishRating={this.ratingCompleted}
                                style={{ paddingVertical: 5, }}
                                imageSize={15}
                                ratingCount={5}
                                startingValue={4}
                                readonly
                            />
                            <TouchableOpacity
                                activeOpacity={0.7}
                            >
                                <Text style={styles.text3}>Carpenter</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.actionBtn}>
                            <Button
                                shadow
                                onPress={() => this.props.navigation.navigate('Chat')}
                                style={styles.chatBtn}
                                BtnTextStyles={styles.chatBtnTxt}
                                BtnText={'Chat'}
                            />
                            <Button
                                shadow
                                onPress={() => this.props.navigation.navigate('Chat')}
                                style={styles.hireBtn}
                                BtnTextStyles={styles.hireBtnTxt}
                                BtnText={'Hire'}
                            />
                        </View>
                    </View>
                    
                    <Reviews
                        reviews={reviews}
                    />
                </Content>
                {!hideTab && <Card style={[styles.tabShadow]}>
                    <View style={styles.tabContent}>
                        <ExploreIcon active />
                        <Text style={[styles.tabText, { color: colors.default }]}>Explore</Text>
                    </View>
                    <View style={styles.tabContent}>
                        <ChatIcon />
                        <Text style={styles.tabText}>Chat</Text>
                    </View>
                    <View style={styles.tabContent}>
                        <HistoryIcon />
                        <Text style={styles.tabText}>History</Text>
                    </View>
                </Card>}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    nav: {
        zIndex: 1000,
        height: '18%',
        width: '100%',
        backgroundColor: colors.navColor,
    },
    navContent: {
        height: '100%',
        justifyContent: 'flex-end',
    },
    navChild: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingBottom: 10,
        alignItems: 'flex-start',
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 5,
        opacity: 0.9,
        margin: 7,
    },
    text1: {
        color: colors.white,
        fontFamily: fonts.nunitoMedium,
        fontSize: 18,
    },
    text2: {
        color: colors.black,
        fontFamily: fonts.nunitoMedium,
        fontSize: 18,
    },
    text3: {
        color: colors.txtGray,
        fontSize: 11,
        padding: 3,
    },
    reviewTxt: {
        color: '#999999',
        fontSize: 12,
        marginTop: 5,
    },
    thumbnail: {
        width: 40,
        height: 40,
        borderColor: colors.default,
        borderWidth: 2,
    },
    txtContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentContainer: {
        flexGrow: 1,
        paddingHorizontal: 20,
        marginTop: 10,
    },
    containerContent: {
        // backgroundColor: 'red',
        alignItems: 'flex-end',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    overlay: {
        position: 'absolute',
        borderRadius: 5,
        height: 112,
        width: 118,
    },
    onlineDot: {
        width: 15,
        height: 15,
        borderRadius: 18 / 2,
        borderColor: colors.white,
        borderWidth: 2,
        backgroundColor: '#00C48C',
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 0,
    },
    caption: {
        color: colors.white,
        fontFamily: fonts.nunitoMedium,
        fontSize: 18,
    },
    icon: {
        justifyContent: 'center'
        // color: '#999999',
        // fontSize: 30,
    },
    artisanIconOverlay: {
        // width: 252,
        // height: 280,
        alignItems: 'flex-end',
        borderRadius: 18 / 2,
        position: 'absolute',
        top: -19,
        right: -19,
    },
    artisanIcon: {
        width: 20,
        height: 20,
        borderRadius: 20 / 2,
        borderColor: colors.white,
        borderWidth: 3,
        backgroundColor: '#20494C',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content1: {
        flexDirection: 'row',
    },
    data: {
        marginTop: 10,
        alignItems: 'center',
    },
    tabShadow: {
        position: 'absolute',
        bottom: 30,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 50,
        flexDirection: 'row',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        zIndex: 1000,
        alignSelf: 'center',
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingVertical: 10,
    },
    tabText: {
        fontSize: 11,
        fontFamily: fonts.nunitoMedium,
        color: '#99ACAD',
        marginTop: 2,
    },
    tabIcon: {
        fontSize: 24,
        color: '#99ACAD',
    },
    tabContent: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    actionBtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        width: '100%',
    },
    chatBtn: {
        backgroundColor: colors.white,
        borderColor: colors.default,
        borderWidth: 1,
        width: '45%',
    },
    hireBtn: {
        width: '45%',
    },
    chatBtnTxt: {
        color: colors.default,
        fontWeight: '500',
    },
    hireBtnTxt: {
        color: colors.white,
        fontWeight: '500',
    },
})

export default Profile;