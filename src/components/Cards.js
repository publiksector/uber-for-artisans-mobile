import React from 'react';
import {
    View,
    Image,
    StyleSheet,
} from 'react-native';
import Text from '../../config/AppText';
import { Card, } from 'native-base';
import { colors, fonts } from '../../constants/DefaultProps';


export default function (props) {
    return (
        <Card style={[styles.Input___shadow]}>
            {props.children}
        </Card>
    )
}

const styles = StyleSheet.create({
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
})