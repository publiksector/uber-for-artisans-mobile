import React from 'react';
import {
    View,
    StyleSheet,
    Image,
} from 'react-native';
import { colors, fonts } from '../../constants/DefaultProps';
import Button from '../../components/Button';
import Text from '../../config/AppText';
import { Content, } from 'native-base';
import img1 from '../../imgs/avatar1.jpg';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import babysitter1 from '../../imgs/babysitter3.jpeg';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { CloseIcon, BackIcon, CarpenterIconSM } from '../Assets';

export class Chat extends React.Component {
    state = {
        hideTab: false,
        chats: [],
    }
    render() {
        const { chats, } = this.state;
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
                                <Text style={styles.text1}>Negotiations</Text>
                            </View>
                            <View style={styles.icon}>
                                <CloseIcon />
                            </View>
                        </View>

                        <View style={styles.chatActions}>
                            <View style={styles.content1}>
                                <Image
                                    style={styles.img}
                                    source={babysitter1}
                                />
                                <View style={styles.overlay}>
                                    <View style={styles.onlineDot}></View>
                                </View>
                                <View style={styles.txtContainer}>
                                    <Text style={styles.text2}>John Doe</Text>
                                    <Rating
                                        onFinishRating={this.ratingCompleted}
                                        style={{ paddingVertical: 5, }}
                                        imageSize={17}
                                        ratingCount={5}
                                        startingValue={3.4}
                                        tintColor={colors.navColor}
                                        readonly
                                    />
                                </View>
                            </View>
                            <View>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={styles.hireBtn}
                                >
                                    <Text style={styles.hireTxt}>Hire</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.artisanIcon}>
                            <CarpenterIconSM />
                        </View>
                    </View>
                </View>
                <Content contentContainerStyle={styles.contentContainer}>
                    {chats.length ? <FlatList
                        data={this.state.messages}
                        renderItem={this._renderItem}
                        keyExtractor={this._keyExtractor}
                        contentContainerStyle={{ paddingHorizontal: 30 }}
                        ref={ref => this.flatList = ref}
                        onContentSizeChange={() => this.flatList.scrollToEnd({ animated: true })}
                    /> : <View style={styles.introContainer}>
                            <Text style={styles.intoTxt}>Say hi and begin negotiations</Text>
                        </View>}
                </Content>
                <View style={styles.footer}>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCFCFC',
    },
    nav: {
        zIndex: 1000,
        height: '28%',
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
        width: 70,
        height: 70,
        borderRadius: 5,
        opacity: 0.9,
        margin: 7,
    },
    text1: {
        color: colors.white,
        fontFamily: fonts.nunitoMedium,
        fontSize: 17,
    },
    text2: {
        color: colors.white,
        fontFamily: fonts.nunitoMedium,
        fontSize: 18,
        marginVertical: 5,
    },
    text3: {
        color: colors.default,
        fontSize: 16,
        padding: 10,
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
        marginLeft: 5,
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
        height: 81,
        width: 83,
    },
    onlineDot: {
        width: 12,
        height: 12,
        borderRadius: 12 / 2,
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
        width: 25,
        height: 25,
        borderRadius: 25 / 2,
        borderColor: colors.white,
        borderWidth: 2.5,
        backgroundColor: '#20494C',
        position: 'absolute',
        bottom: -10, 
        left: '50%',
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
    chatActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    hireBtn: {
        height: 50,
        width: 50,
        borderRadius: 50 / 2,
        backgroundColor: colors.default,
        justifyContent: 'center',
        alignItems: 'center',
    },
    hireTxt: {
        fontSize: 16,
        color: colors.white,
        fontFamily: fonts.nunitoMedium,
    },
    intoTxt: {
        color: '#99ACAD',
        fontSize: 16,
    },
    introContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        height: '10%',
        backgroundColor: colors.white,
        borderTopWidth: 1,
        borderTopColor: '#F6F6F6'
    },
})

export default Chat;