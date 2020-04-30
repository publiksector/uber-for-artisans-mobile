import React from 'react';
import { StyleSheet, View, Dimensions, Platform, Linking, TouchableOpacity, } from 'react-native';
import {
    CoordinatorLayout,
    BottomSheetBehavior,
    FloatingActionButton,
} from 'react-native-bottom-sheet-behavior';
import { BottomSheet } from '../../components/BottomSheet';
import { colors, fonts, } from '../../constants/DefaultProps';
import Text from '../../config/AppText';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { CheckBox, } from 'native-base';
import Button from '../../components/Button';

const HEADER_HEIGHT = 30;

export default function (props) {
    return (
        <>
            {Platform.OS === 'ios' && <BottomSheet
                top={0.6 * Dimensions.get('screen').height}
                start={538}
                hideTab={() => { }}
            >
                <View style={styles.sortContainer}>
                    <View style={styles.sortTxtContainer}>
                        <Text style={styles.text1}>Sort</Text>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => props.cancel()}
                        >
                            <Text style={styles.text}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.categoryContainer}>
                        <View style={styles.rating}>
                            <Text style={styles.text3}>Ratings</Text>
                            <Rating
                                onFinishRating={props.rate}
                                // style={{ paddingHorizontal: 5, }}
                                imageSize={25}
                                ratingCount={5}
                                startingValue={props.rating}
                            />
                        </View>
                        <View style={styles.available}>
                            <Text style={styles.text4}>Available</Text>
                            <CheckBox
                                checked={props.checked}
                                onPress={() => props.toggleCheck()}
                                color={colors.navColor}
                            />
                        </View>

                        <View style={styles.apply}>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() => props.clear()}
                            >
                                <Text style={styles.text}>Clear All</Text>
                            </TouchableOpacity>
                            <Button
                                style={styles.btn}
                                shadow
                                BtnTextStyles={styles.btnText}
                                BtnText={'Apply'}
                            />
                        </View>
                    </View>
                </View>
            </BottomSheet>}

            {Platform.OS === 'android' && <CoordinatorLayout style={{ flex: 1, width: '100%', position: 'absolute', zIndex: 1000 }}>
                <View style={{ flex: 1, backgroundColor: 'transparent', width: '100%' }}></View>
                <BottomSheetBehavior
                    // ref='bottomSheet'
                    peekHeight={210}
                    hideable={false}
                    state={BottomSheetBehavior.STATE_COLLAPSED}>
                    <View style={{ backgroundColor: '#ffffff' }}>
                        <View style={styles.header}>
                            <View style={styles.drawerIcon}></View>
                        </View>

                        <View>
                            <Text style={styles.text1}>Explore our artisans by category</Text>
                            <View style={styles.categoryContainer}>
                                <Text style={styles.categoryTxt}>Categories</Text>
                                <View>

                                </View>
                            </View>
                        </View>
                    </View>
                </BottomSheetBehavior>
                {/* <FloatingActionButton autoAnchor ref="fab" /> */}
            </CoordinatorLayout>}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    map_btn: {
        marginTop: 50,
        width: 65,
        height: 65,
        borderWidth: 1,
        borderRadius: 65 / 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 5,
    },
    map_btn_icon: {
        borderRadius: 65 / 2,
        width: 65,
        height: 65,
        justifyContent: 'center',
        alignItems: 'center',
    },
    marker: {
        backgroundColor: colors.pink,
        padding: 5,
        paddingHorizontal: 20,
        borderRadius: 5,
        position: 'relative',
        bottom: 60,
    },
    text: {
        fontFamily: fonts.nunitoRegular,
        color: colors.default,
        fontSize: 16,
    },
    text1: {
        fontSize: 18,
        fontFamily: fonts.nunitoMedium,
        color: colors.black,
        // textAlign: 'center',
    },
    text3: {
        fontSize: 16,
        fontFamily: fonts.nunitoMedium,
        color: '#999999',
        marginVertical: 20,
    },
    text4: {
        fontSize: 16,
        fontFamily: fonts.nunitoMedium,
        color: '#999999',
    },
    header: {
        height: HEADER_HEIGHT,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    drawerIcon: {
        width: 35,
        height: 5,
        borderRadius: 5,
        backgroundColor: '#D5DDE0',
    },
    categoryTxt: {
        fontSize: 24,
        fontFamily: fonts.nunitoMedium,
        marginLeft: 30,
    },
    categoryContainer: {
        marginTop: 20,
        alignItems: 'flex-start',
    },
    featuredContainer: {
        marginTop: 20,
    },
    sortContainer: {
        paddingHorizontal: 30,
    },
    sortTxtContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rating: {
        marginBottom: 20,
    },
    available: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    apply: {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
    },
    btn: {
        width: '48%',
        borderRadius: 5,
    },
    btnText: {
        fontSize: 16,
        color: colors.white,
        fontFamily: fonts.nunitoBold,
    },
});