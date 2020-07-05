import React from 'react';
import {
    View,
    StyleSheet,
    Image,
} from 'react-native';
import { colors, fonts } from '../../constants/DefaultProps';
import Button from '../../components/Button';
import Text from '../../config/AppText';
import { Content, Thumbnail, } from 'native-base';
import img1 from '../../imgs/avatar1.jpg';
import { ScrollView, TouchableOpacity, FlatList, TextInput } from 'react-native-gesture-handler';
import babysitter1 from '../../imgs/babysitter3.jpeg';
import { Rating, AirbnbRating } from 'react-native-ratings';
import {
    CloseIcon,
    BackIcon,
    CarpenterIconSM,
    AddIcon,
    CameraIcon,
    PhotoIcon,
    MicIcon,
    ChatSendIcon,
} from '../Assets';
import AutogrowInput from 'react-native-autogrow-input';

export class Chat extends React.Component {
    state = {
        hideTab: false,
        chats: [
            {
                id: 1,
                sender: 1,
                receiver: undefined,
                message: "I need to get my table fixed",
                avatarUri: "https://images.pexels.com/photos/163077/mario-yoschi-figures-funny-163077.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            },
            {
                id: 2,
                sender: 1,
                receiver: undefined,
                message: "Just wanna know what the price is like?",
                avatarUri: "https://images.pexels.com/photos/163077/mario-yoschi-figures-funny-163077.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            },
            {
                id: 3,
                sender: undefined,
                receiver: 2,
                message: "Well we could always work something out just send me the picture of the table ",
                avatarUri: "https://images.pexels.com/photos/4776/man-sunglasses-art-graffiti.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            },
            {
                id: 4,
                sender: 1,
                receiver: undefined,
                message: "Once i get home i would take a picture",
                avatarUri: "https://images.pexels.com/photos/163077/mario-yoschi-figures-funny-163077.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            },
            {
                id: 5,
                sender: undefined,
                receiver: 2,
                message: "Oh, cool i would just draw up an invoice",
                avatarUri: "https://images.pexels.com/photos/4776/man-sunglasses-art-graffiti.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            },
            {
                id: 6,
                sender: undefined,
                receiver: 2,
                message: "You can simply import the FIG file into your workflow and publish it after",
                avatarUri: "https://images.pexels.com/photos/4776/man-sunglasses-art-graffiti.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            },
        ],
        message: undefined,
        focus: false,
    }
    _keyExtractor = (item, index) => index;
    _renderItem = ({ item }) => (
        <>
            {item.sender ? <View style={styles.senderContainer}>
                <View style={styles.senderContent}>
                    <Text style={styles.senderTxt}>{item.message}</Text>
                </View>
            </View> : <View style={styles.receiverContainer}>
                    <View style={styles.receiverContent}>
                        <Text style={styles.receiverTxt}>{item.message}</Text>
                    </View>
                </View>}
        </>
    );

    sendMessage = () => {
        const { chats, message, } = this.state;
        if (message && message.trim() != '' && message.length > 0) {
            this.setState((prevState) => ({
                chats: prevState.chats.concat({ message, id: chats[chats.length - 1].id + 1, sender: 1, }),
                message: '',
                focus: true,
            }))
        }
    }

    render() {
        const { chats, message, focus, } = this.state;
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
                <View style={styles.contentContainer}>
                    {chats.length ? <FlatList
                        data={this.state.chats}
                        renderItem={this._renderItem}
                        keyExtractor={this._keyExtractor}
                        showsVerticalScrollIndicator={false}
                        // contentContainerStyle={{ paddingHorizontal: 30 }}
                        ref={ref => this.flatList = ref}
                        onContentSizeChange={() => this.flatList.scrollToEnd({ animated: true })}
                    /> : <View style={styles.introContainer}>
                            <Text style={styles.intoTxt}>Say hi and begin negotiations</Text>
                        </View>}
                </View>
                <View style={styles.footer}>
                    <View style={styles.messageActionBtns}>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.messageBtn}
                        >
                            <AddIcon />
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.messageBtn}
                        >
                            <CameraIcon />
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.messageBtn}
                        >
                            <PhotoIcon />
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.messageBtn}
                        >
                            <MicIcon />
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '55%', justifyContent: "center", flexDirection: "row", alignItems: "center", }}>
                        <TextInput
                            autoCapitalize={"none"}
                            style={styles.chatInput}
                            placeholder={'enter message'}
                            multiline
                            onChangeText={(text) => this.setState({ message: text, })}
                            defaultValue={message}
                            value={message}
                            onSubmitEditing={this.sendMessage}
                            blurOnSubmit
                            autoCorrect={false}
                            // autoFocus={focus}
                        />
                        <TouchableOpacity
                            activeOpacity={message && message.length > 0 ? 0.7 : 1}
                            onPress={message && message.length > 0 ? this.sendMessage : () => { }}
                        >
                            <ChatSendIcon active={message && message.length > 0 ? true : false} />
                        </TouchableOpacity>
                    </View>
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
        flex: 1,
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
        flexDirection: "row",
        justifyContent: "space-between",
        height: '10%',
        width: '100%',
        backgroundColor: colors.white,
        borderTopWidth: 1,
        borderTopColor: '#F6F6F6'
    },
    senderContainer: {
        marginVertical: 7,
        alignItems: 'flex-end',
    },
    senderContent: {
        backgroundColor: colors.navColor,
        maxWidth: '80%',
        borderRadius: 20,
        borderBottomEndRadius: 0,
        borderBottomStartRadius: 30,
        borderTopStartRadius: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 5,
        justifyContent: 'center',
        padding: 10,
        paddingVertical: 13,
        paddingHorizontal: 20,
    },
    senderTxt: {
        color: colors.white,
        fontSize: 13,
    },
    receiverContainer: {
        marginVertical: 7,
        alignItems: 'flex-start',
    },
    receiverContent: {
        flex: 1,
        maxWidth: '80%',
        backgroundColor: colors.white,
        // height: '100%',
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        marginLeft: 2,
        elevation: 8,
        justifyContent: 'center',
        padding: 12,
    },
    receiverTxt: {
        color: '#151522',
        fontSize: 13,
        flexShrink: 1,
    },
    messageActionBtns: {
        flexDirection: 'row',
        justifyContent: "space-around",
        width: "45%",
        height: "100%",
        alignItems: "center",
    },
    messageBtn: {
        height: 35,
        width: 35,
        borderRadius: 10,
        backgroundColor: colors.default,
        justifyContent: 'center',
        alignItems: 'center',
    },
    chatInput: {
        width: '80%',
        fontFamily: fonts.nunitoRegular,
        fontSize: 14,
        // backgroundColor: "green",
        borderRadius: 50,
        paddingHorizontal: 10,
    },
})

export default Chat;