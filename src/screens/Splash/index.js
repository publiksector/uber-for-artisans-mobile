import React from 'react';
import {
    View,
    ImageBackground,
    StyleSheet,
} from 'react-native';
import { colors } from '../../constants/DefaultProps';
import Button from '../../components/Button';
import Text from '../../config/AppText';

export class Splash extends React.Component {
    render() {
        return (
            <View style={styles.container}>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default Splash;