import React from 'react';
import {
    StyleSheet,
} from 'react-native';
import { Card } from 'native-base';

export default function (props) {
    return (
        <Card style={[styles.Input___shadow, props.style]}>
            {props.children}
        </Card>
    )
}

const styles = StyleSheet.create({
    Input___shadow: {
        position: 'relative',
        left: 20,
        marginLeft: 10,
        marginTop: 25,
        padding: 20,
        // borderWidth: 1,
        borderRadius: 50,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 8,
        zIndex: 1000,
        // width: 100,
        justifyContent: 'center',
        paddingVertical: 5,
    },
})