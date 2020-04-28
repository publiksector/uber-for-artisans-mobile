import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, ScrollView, } from 'react-native';
import { colors, fonts, } from '../../constants/DefaultProps';
import Text from '../../config/AppText';
import carpenter2 from '../../imgs/carpenter2.jpeg';
import babysitter1 from '../../imgs/babysitter3.jpeg';
import { PlumberIcon, CarpenterIcon, } from '../Assets';

export default function (props) {
    return (
        <View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.container}>
                <TouchableOpacity
                    style={styles.imgContainer}
                    activeOpacity={0.7}
                    onPress={() => props.explore()}
                >
                    <Image
                        style={styles.img}
                        source={carpenter2} />
                    <View style={styles.overlay}>
                        <CarpenterIcon />
                        <Text style={styles.caption}>Carpenter</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.imgContainer}
                    activeOpacity={0.7}
                >
                    <Image
                        style={styles.img}
                        source={babysitter1} />
                    <View style={styles.overlay}>
                        <CarpenterIcon />
                        <Text style={styles.caption}>Baby sitter</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.imgContainer}
                    activeOpacity={0.7}
                >
                    <Image
                        style={styles.img}
                        source={carpenter2} />
                    <View style={styles.overlay}>
                        <CarpenterIcon />
                        <Text style={styles.caption}>Carpenter</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
            <TouchableOpacity
                activeOpacity={0.7}
            >
                <Text style={styles.text1}>View all</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        marginTop: 20,
        paddingHorizontal: 30,
    },
    img: {
        width: 150,
        height: 150,
        borderRadius: 20,
        opacity: 0.9,
        marginRight: 18,
    },
    imgContainer: {

    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        height: 150,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 20,
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
        marginRight: 30,
    },
})