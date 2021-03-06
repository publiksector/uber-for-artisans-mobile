import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import { colors, fonts } from '../../constants/DefaultProps';
import Button from '../../components/Button';
import Text from '../../config/AppText';
import { Icon, Card, Content } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CarpenterIconSM, FilterIcon, HistoryIcon, ChatIcon, ExploreIcon, CloseIcon, BackIcon } from '../Assets';
import { artisans, } from '../../fakers';
import SortSlider from './SortSlider';
import ArtisanList from './ArtisanList';

export class ArtisanExplore extends React.Component {
    state = {
        hideTab: false,
        selected: undefined,
        toggleSlider: undefined,
        rating: 0,
        toggleCheck: false,
    }
    selectCategory = (id) => {
        this.setState({ selected: id, });
    }
    toggleSlider = () => {
        const { hideTab, toggleSlider, } = this.state;
        this.setState({ toggleSlider: !toggleSlider, hideTab: !hideTab, });
    }
    rate = (e) => {
        this.setState({
            rating: e,
        });
    }
    toggleCheck = () => {
        const { toggleCheck, } = this.state;
        this.setState({
            toggleCheck: !toggleCheck,
        });
    }
    clear = () => {
        this.setState({
            rating: 0,
            toggleCheck: false,
        });
    }
    render() {
        const { hideTab, toggleSlider, toggleCheck, rating, } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.nav}>
                    <View style={styles.navContent}>
                        <View style={styles.navChild}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.goBack()}
                                style={styles.icon}>
                                <BackIcon />
                            </TouchableOpacity>
                            <View>
                                <Text style={styles.text1}>Negotiations</Text>
                            </View>
                            <View style={styles.icon}>
                                <CloseIcon />
                            </View>
                        </View>
                    </View>
                </View>
                <Content contentContainerStyle={styles.categoryContainer}>
                    <View style={styles.categoryHeader}>
                        <View>
                            <Text style={styles.title}>Carpenter</Text>
                            <Text style={styles.titleCaption}>The decision is in your hands</Text>
                        </View>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={this.toggleSlider}
                        >
                            <FilterIcon />
                        </TouchableOpacity>
                    </View>
                    <ArtisanList
                        artisans={artisans}
                        navigation={this.props.navigation}
                    />
                </Content>
                {!hideTab && <Card style={[styles.tabShadow]}>
                    <View style={styles.tabContent}>
                        <ExploreIcon active />
                        <Text style={[styles.tabText, { color: colors.default }]}>Explore</Text>
                    </View>
                    <View style={styles.tabContent}>
                        <ChatIcon />
                        <Text style={styles.tabText}>Chat</Text>
                    </View>
                    <View style={styles.tabContent}>
                        <HistoryIcon />
                        <Text style={styles.tabText}>History</Text>
                    </View>
                </Card>}
                {toggleSlider && <SortSlider
                    {...this.props}
                    explore={() => this.props.navigation.navigate('ArtisanExplore')}
                    // hideTab={(e) => this.setState({ hideTab: e, })}
                    rate={this.rate}
                    rating={rating}
                    toggleCheck={this.toggleCheck}
                    checked={toggleCheck}
                    cancel={this.toggleSlider}
                    clear={this.clear}
                />}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    nav: {
        zIndex: 1000,
        height: '18%',
        width: '100%',
        backgroundColor: colors.navColor,
    },
    navContent: {
        height: '100%',
        justifyContent: 'flex-end',
    },
    navChild: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingBottom: 10,
        alignItems: 'flex-end',
        // backgroundColor:'red'
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 5,
        opacity: 0.9,
        margin: 7,
    },
    text1: {
        color: colors.white,
        fontFamily: fonts.nunitoMedium,
        fontSize: 17,
    },
    text2: {
        color: colors.black,
        fontFamily: fonts.nunitoMedium,
        fontSize: 18,
    },
    text3: {
        color: colors.default,
        fontSize: 16,
        padding: 10,
    },
    reviewTxt: {
        color: '#999999',
        fontSize: 12,
        marginTop: 5,
    },
    thumbnail: {
        width: 40,
        height: 40,
        borderColor: colors.default,
        borderWidth: 2,
    },
    txtContainer: {
        alignItems: 'flex-start',
        marginLeft: 10,
        justifyContent: 'center',
    },
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
    categoryContainer: {
        flexGrow: 1,
        // zIndex: 500,
        // height: '8%',
        paddingHorizontal: 20,
        // width: '100%',
    },
    containerContent: {
        // backgroundColor: 'red',
        alignItems: 'flex-end',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    overlay: {
        position: 'absolute',
        top: 20,
        borderRadius: 5,
        height: 96,
        width: 115,
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
    icon: {
        justifyContent: 'center'
    },
    artisanIconOverlay: {
        // width: 252,
        // height: 280,
        alignItems: 'flex-end',
        borderRadius: 18 / 2,
        position: 'absolute',
        top: -19,
        right: -19,
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
    content1: {
        flexDirection: 'row',
    },
    title: {
        fontFamily: fonts.nunitoRegular,
        fontSize: 28,
        color: '#666666',
        fontWeight: '300',
    },
    titleCaption: {
        fontFamily: fonts.nunitoRegular,
        fontSize: 13,
        color: colors.black,
    },
    categoryHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
        // alignItems:'flex-end'
    },
    categoryHeaderIcon: {
        fontSize: 40,
        color: colors.default,
    },
    tabShadow: {
        position: 'absolute',
        bottom: 30,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 50,
        flexDirection: 'row',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        zIndex: 1000,
        alignSelf: 'center',
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingVertical: 10,
    },
    tabText: {
        fontSize: 11,
        fontFamily: fonts.nunitoMedium,
        color: '#99ACAD',
        marginTop: 2,
    },
    tabIcon: {
        fontSize: 24,
        color: '#99ACAD',
    },
    tabContent: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
})

export default ArtisanExplore;