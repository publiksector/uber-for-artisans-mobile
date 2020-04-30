import React from 'react';
import {
    View,
    Image,
    StyleSheet,
} from 'react-native';
import Text from '../../config/AppText';
import { Card, } from 'native-base';
import { TouchableOpacity, } from 'react-native-gesture-handler';
import babysitter1 from '../../imgs/babysitter3.jpeg';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { CarpenterIconSM, } from '../Assets';
import { colors, fonts } from '../../constants/DefaultProps';


export default function (props) {
    return (
        <>
            {props.artisans.map((artisan, i) => <Card key={i} style={[styles.Input___shadow]}>
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
                                <Text style={styles.text2}>{artisan.name}</Text>
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
                                onPress={() => props.navigation.navigate('Profile')}
                            >
                                <Text style={styles.text3}>Negotiate</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Card>)}
        </>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 100,
        height: 100,
        borderRadius: 5,
        opacity: 0.9,
        margin: 7,
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
    containerContent: {
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
        fontSize: 30,
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
})