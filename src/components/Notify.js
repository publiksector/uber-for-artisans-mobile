import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    StatusBar,
    RefreshControl,
    Animated,
    Easing,
} from 'react-native';
import {
    Icon,
    Thumbnail,
    Spinner,
    Card,
    CardItem,
} from 'native-base';
import { fonts, colors, roles } from '../constants/DefaultProps';
import Text from '../config/AppText';

function Notify(props) {
    const [opacity, setOpacity] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            easing: Easing.back(),
            duration: 500,
            useNativeDriver: true,
        }).start();
    })

    notification = () => {
        setTimeout(() => {
            Animated.timing(opacity, {
                toValue: 0,
                easing: Easing.back(),
                duration: 1000,
                useNativeDriver: true,
            }).start();
        }, (props.duration || 5000));
        return (
            <Animated.View style={{ opacity: opacity, zIndex: 1000, position: "absolute", top: 0, width: "100%", }}>
                <Card style={styles.Input___shadow}>
                    <CardItem style={styles.cardItem}>
                        <View>
                            <Icon style={{ color: colors.black, }} name='ios-notifications' />
                        </View>
                        <View style={{ paddingHorizontal: 15, }}>
                            <Text style={{ color: colors.black, fontFamily: fonts.nunitoBold, fontSize: 18, }}>{props.title}</Text>
                            <Text style={{ color: colors.gray, fontFamily: fonts.nunitoRegular, }}>{props.message}</Text>
                        </View>
                    </CardItem>
                </Card>
            </Animated.View>
        )
    }

    return (
        <>
            {notification()}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    Input___shadow: {
        position: "absolute",
        left: 20,
        right: 20,
        top: 50,
        zIndex: 1000,
        paddingRight: 12,
        marginTop: 10,
        borderWidth: 1,
        borderColor: colors.white,
        borderEndColor:colors.default,
        borderRadius: 5,
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 5,
        backgroundColor: colors.default,
    },
    cardItem: {
        borderRadius: 4,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        backgroundColor: colors.white,
        flexDirection: 'row',
    }
});

export default Notify;