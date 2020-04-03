import React from 'react';
import { StyleSheet, View, } from 'react-native';
import { Button, Spinner } from 'native-base';
import Text from '../config/AppText';
import { colors } from '../constants/DefaultProps';

const Component = ({
    Icon,
    size = "lg",
    BtnText,
    onPress,
    BtnTextStyles,
    style,
    loading,
    shadow,
    disabled,
}) => {
    const mainStyles = [{
        width: size === 'sm' ? 103 : "100%",
        height: size === 'sm' ? 36 : 48,
        backgroundColor: colors.default,
        borderRadius: 30,
        justifyContent: "center",
    }];

    if (style) {
        if (Array.isArray(style)) {
            mainStyles = mainStyles.concat(style)
        } else {
            mainStyles.push(style)
        }
    }

    return <Button
        disabled={loading || disabled ? true : false}
        activeOpacity={0.7}
        style={[mainStyles, shadow ? styles.shadow : undefined, disabled ? { backgroundColor: colors.btnDisabled } : null]}
        onPress={onPress}>

        {Icon ? <View style={{ alignSelf: 'center', }}>{Icon}</View> : null}
        {BtnText && !loading ? <Text style={styles.ButtonText, BtnTextStyles}>{BtnText}</Text> : null}
        {loading ? <Spinner color={colors.info} size="large" /> : null}
    </Button>
};

const styles = StyleSheet.create({
    ButtonText: {
        flex: 1,
        width: 154,
        height: 22,
        // fontFamily: fonts.medium,
        fontSize: 12,
        color: '#FFFFFF',
        textAlign: 'center',
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 1,
    },
});

export default Component;