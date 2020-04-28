import React from 'react';
import {
    View,
    ImageBackground,
    StyleSheet,
    ScrollView,
    Image,
} from 'react-native';
import { colors, fonts } from '../../constants/DefaultProps';
import Button from '../../components/Button';
import { Item, Input } from 'native-base';
import Text from '../../config/AppText';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GoogleIcon, FacebookIcon } from '../Assets';
import AppIntro from 'react-native-app-intro';
import Onboarding from 'react-native-onboarding-swiper';
import illustration from '../../imgs/illustration.png';

export class Onboard1 extends React.Component {
    state = {
        isProccessing: false,
        validationErr: false,
    }
    render() {
        return (
            // <AppIntro>
            //     <View style={[styles.slide, { backgroundColor: '#fa931d' }]}>
            //         <View level={10}><Text style={styles.text}>Page 1</Text></View>
            //         <View level={15}><Text style={styles.text}>Page 1</Text></View>
            //         <View level={8}><Text style={styles.text}>Page 1</Text></View>
            //     </View>
            //     <View style={[styles.slide, { backgroundColor: '#a4b602' }]}>
            //         <View level={-10}><Text style={styles.text}>Page 2</Text></View>
            //         <View level={5}><Text style={styles.text}>Page 2</Text></View>
            //         <View level={20}><Text style={styles.text}>Page 2</Text></View>
            //     </View>
            //     <View style={[styles.slide, { backgroundColor: '#fa931d' }]}>
            //         <View level={8}><Text style={styles.text}>Page 3</Text></View>
            //         <View level={0}><Text style={styles.text}>Page 3</Text></View>
            //         <View level={-10}><Text style={styles.text}>Page 3</Text></View>
            //     </View>
            //     <View style={[styles.slide, { backgroundColor: '#a4b602' }]}>
            //         <View level={5}><Text style={styles.text}>Page 4</Text></View>
            //         <View level={10}><Text style={styles.text}>Page 4</Text></View>
            //         <View level={15}><Text style={styles.text}>Page 4</Text></View>
            //     </View>
            // </AppIntro>
            <Onboarding
                pages={[
                    {
                        backgroundColor: '#fff',
                        image: <Image source={illustration} />,
                        title: 'Onboarding',
                        subtitle: 'Done with React Native Onboarding Swiper',
                        bottomBarColor: 'red'
                    },
                    {
                        backgroundColor: '#fff',
                        // image: <Image source={require('./images/circle.png')} />,
                        title: 'Onboarding',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },
                ]}
                // imageContainerStyles={{ paddingBottom: 200, }}
                containerStyles={{ flex: 1, }}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        padding: 30,
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
        padding: 15,
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
})

export default Onboard1;