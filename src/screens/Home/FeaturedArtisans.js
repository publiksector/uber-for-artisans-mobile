import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, ScrollView, } from 'react-native';
import { Spinner, Thumbnail, Form, Card, CardItem } from 'native-base';
import { colors, fonts, } from '../../constants/DefaultProps';
import Text from '../../config/AppText';
import carpenter2 from '../../imgs/carpenter2.jpeg';
import babysitter1 from '../../imgs/babysitter3.jpeg';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { CarpenterIcon, CarpenterIconSM, } from '../Assets';

export default function () {
    return (
        <View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.container}>
                <View style={styles.imgContainer}>
                    <Card style={[styles.Input___shadow]}>
                        <View style={styles.artisanIconOverlay}>
                            <View style={styles.artisanIcon}>
                                <CarpenterIconSM />
                            </View>
                        </View>
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
                                // onFinishRating={this.ratingCompleted}
                                style={{ paddingVertical: 5, }}
                                imageSize={15}
                                ratingCount={5}
                                startingValue={0}
                                readonly
                            />
                            <TouchableOpacity
                                activeOpacity={0.7}
                            >
                                <Text style={styles.text3}>Hire</Text>
                            </TouchableOpacity>
                        </View>
                    </Card>
                </View>

                <View style={styles.imgContainer}>
                    <Card style={[styles.Input___shadow]}>
                        <View style={styles.artisanIconOverlay}>
                            <View style={styles.artisanIcon}>
                                <CarpenterIconSM />
                            </View>
                        </View>
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
                                // onFinishRating={this.ratingCompleted}
                                style={{ paddingVertical: 5, }}
                                imageSize={15}
                                ratingCount={5}
                                startingValue={0}
                                readonly
                            />
                            <TouchableOpacity
                                activeOpacity={0.7}
                            >
                                <Text style={styles.text3}>Hire</Text>
                            </TouchableOpacity>
                        </View>
                    </Card>
                </View>

                <View style={styles.imgContainer}>
                    <Card style={[styles.Input___shadow]}>
                        <View style={styles.artisanIconOverlay}>
                            <View style={styles.artisanIcon}>
                                <CarpenterIconSM />
                            </View>
                        </View>
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
                                // onFinishRating={this.ratingCompleted}
                                style={{ paddingVertical: 5, }}
                                imageSize={15}
                                ratingCount={5}
                                startingValue={0}
                                readonly
                            />
                            <TouchableOpacity
                                activeOpacity={0.7}
                            >
                                <Text style={styles.text3}>Hire</Text>
                            </TouchableOpacity>
                        </View>
                    </Card>
                </View>
            </ScrollView>
            {/* <TouchableOpacity
                activeOpacity={0.7}
            >
                <Text style={styles.text1}>View all</Text>
            </TouchableOpacity> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        marginTop: 20,
    },
    img: {
        width: 110,
        height: 110,
        borderRadius: 5,
        opacity: 0.9,
    },
    imgContainer: {

    },
    overlay: {
        position: 'absolute',
        top: 20,
        borderRadius: 5,
        height: 120,
        width: 130,
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
    caption: {
        color: colors.white,
        fontFamily: fonts.nunitoMedium,
        fontSize: 18,
    },
    text1: {
        color: colors.default,
        fontSize: 16,
        alignSelf: 'flex-end',
        marginTop: 10,
    },
    text2: {
        color: colors.black,
        fontFamily: fonts.nunitoMedium,
        fontSize: 20,
        marginTop: 10,
    },
    text3: {
        color: colors.default,
        fontSize: 16,
        marginTop: 5,
    },
    Input___shadow: {
        // borderWidth: 1,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        // elevation: 8,
        zIndex: 1000,
        alignSelf: 'center',
        width: 180,
        height: 240,
        marginLeft: 30,
        alignItems: 'center',
        paddingVertical: 20,
    },
    txtContainer: {
        alignItems: 'center',
    },
    artisanIconOverlay: {
        width: 192,
        // height: 280,
        borderRadius: 18 / 2,
        position: 'absolute',
        top: -12,
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
})