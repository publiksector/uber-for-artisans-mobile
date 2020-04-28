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
import { Thumbnail, Icon, Card } from 'native-base';
import img1 from '../../imgs/avatar1.jpg';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import babysitter1 from '../../imgs/babysitter3.jpeg';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { CarpenterIconSM, } from '../Assets';

export class ArtisanExplore extends React.Component {
    state = {
        hideTab: false,
        selected: undefined,
    }
    selectCategory = (id) => {
        this.setState({ selected: id, });
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.nav}>
                    <View style={styles.navContent}>
                        <View style={styles.navChild}>
                            <Icon
                                style={styles.icon}
                                name="ios-back" />
                            <View>
                                <Text style={styles.text1}>Explore</Text>
                                {/* <Text style={styles.text2}>Which artisan are you looking for today?</Text> */}
                            </View>
                            <Icon
                                style={styles.icon}
                                name="ios-close" />
                            {/* <Thumbnail
                                style={styles.thumbnail}
                                source={img1}
                            /> */}
                        </View>
                    </View>
                </View>
                <View style={styles.categoryContainer}>
                    <View>
                        <View>
                            <Text style={styles.title}>Carpenter</Text>
                            <Text style={styles.titleCaption}>The decision is in your hands</Text>
                        </View>
                        <Icon name="ios-add" />
                    </View>
                    <Card style={[styles.Input___shadow]}>
                        <View style={{ paddingHorizontal: 10, width: '100%', }}>
                            <View style={styles.containerContent}>
                                <View style={styles.artisanIconOverlay}>
                                    <View style={styles.artisanIcon}>
                                        <CarpenterIconSM />
                                    </View>
                                </View>
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
                                            startingValue={3.5}
                                            readonly
                                        />
                                        <Text style={styles.reviewTxt}>234 Reviews</Text>
                                    </View>
                                </View>
                                <View>
                                    <TouchableOpacity
                                        activeOpacity={0.7}
                                    >
                                        <Text style={styles.text3}>Hire</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Card>
                </View>
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
        alignItems: 'flex-end',
        // backgroundColor:'red'
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
        alignItems: 'flex-start',
        marginLeft: 10,
        justifyContent: 'center',
    },
    Input___shadow: {
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        zIndex: 1000,
        alignSelf: 'center',
        width: '100%',
        flexDirection: 'row',
        paddingVertical: 10,
    },
    categoryContainer: {
        zIndex: 500,
        height: '8%',
        paddingHorizontal: 20,
        // width: '100%',
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
        top: 20,
        borderRadius: 5,
        height: 96,
        width: 115,
    },
    onlineDot: {
        width: 18,
        height: 18,
        borderRadius: 18 / 2,
        borderColor: colors.white,
        borderWidth: 2,
        backgroundColor: '#00C48C',
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 0,
    },
    icon: {
        color: '#999999',
        fontSize: 45,
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
        borderWidth: 3,
        backgroundColor: '#20494C',
        position: 'absolute',
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content1: {
        flexDirection: 'row',
    },
    title: {
        fontFamily: fonts.merriweatherRegular,
        fontSize: 28,
        color: '#666666',
        fontWeight: '300',
    },
    titleCaption: {
        fontFamily: fonts.nunitoRegular,
        fontSize: 13,
        color: colors.black,
    }
})

export default ArtisanExplore;