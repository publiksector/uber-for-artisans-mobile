import React from 'react';
import { StyleSheet, View, Dimensions, Platform, Linking, TouchableOpacity, } from 'react-native';
import {
    CoordinatorLayout,
    BottomSheetBehavior,
    FloatingActionButton,
} from 'react-native-bottom-sheet-behavior';
import { BottomSheet } from '../../components/BottomSheet';
import { Spinner, Thumbnail, Form, Card, CardItem } from 'native-base';
import { colors, fonts, } from '../../constants/DefaultProps';
import Text from '../../config/AppText';
import CategoryList from './CategoryList';
import FeaturedArtisans from './FeaturedArtisans';

const HEADER_HEIGHT = 30;

export default function (props) {
    return (
        <>
            {Platform.OS === 'ios' && <BottomSheet
                hideTab={props.hideTab}
            >
                <View>
                    <Text style={styles.text1}>Explore our artisans by category</Text>
                    <View style={styles.categoryContainer}>
                        <Text style={styles.categoryTxt}>Categories</Text>
                        <View>
                            <CategoryList explore={props.explore} />
                        </View>
                    </View>

                    <View style={styles.categoryContainer}>
                        <Text style={styles.categoryTxt}>Featured Artisans</Text>
                        <View>
                            <FeaturedArtisans />
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
                                    <CategoryList />
                                </View>
                            </View>

                            <View style={styles.categoryContainer}>
                                <Text style={styles.categoryTxt}>Featured Artisans</Text>
                                <View>
                                    <FeaturedArtisans />
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
        fontFamily: fonts.bold,
        color: '#ffffff',
    },
    text1: {
        fontSize: 18,
        fontFamily: fonts.nunitoMedium,
        color: colors.black,
        textAlign: 'center',
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
    },
    featuredContainer: {
        marginTop: 20,
    },
});