import React from 'react';
import {View, ImageBackground, StyleSheet, StatusBar} from 'react-native';
import {colors, fonts} from '../../constants/DefaultProps';
import Button from '../../components/Button';
import Text from '../../config/AppText';
import {Thumbnail, Icon, Card} from 'native-base';
import img1 from '../../imgs/avatar1.jpg';
import ExploreSlider from './ExploreSlider';
import MapView from '../MapView';
import Tags from '../../components/Tags';
import {
  PlumberIcon,
  HairCutIcon,
  TailorIcon,
  ExploreIcon,
  HistoryIcon,
  ChatIcon,
} from '../Assets';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {categories} from '../../fakers';

export class Home extends React.Component {
  state = {
    hideTab: false,
    selected: undefined,
  };
  selectCategory = id => {
    this.setState({selected: id});
  };
  render() {
    const {hideTab, selected} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.nav}>
          <View style={styles.navContent}>
            <View style={styles.navChild}>
              <View>
                <Text style={styles.text1}>Hi Somto</Text>
                <Text style={styles.text2}>
                  Which artisan are you looking for today?
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Account')}>
                <Thumbnail style={styles.thumbnail} source={img1} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.categoryContainer}>
          <View style={styles.tagContainer}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.subTag}>
              {categories.map((items, i) => (
                <Tags
                  key={i}
                  style={
                    selected == items.id
                      ? {backgroundColor: colors.default}
                      : null
                  }>
                  <TouchableOpacity
                    onPress={() => this.selectCategory(items.id)}
                    activeOpacity={0.7}>
                    <View style={[styles.tagChild]}>
                      <PlumberIcon />
                      <Text style={styles.tagText}>{items.name}</Text>
                      {/* {selected == items.id ? <Text style={[styles.tagText2]}>{items.name}</Text> : } */}
                    </View>
                  </TouchableOpacity>
                </Tags>
              ))}
            </ScrollView>
          </View>
        </View>
        {/* <View style={styles.tabNavigation}>

                </View> */}
        {/* <MapView /> */}
        {!hideTab && (
          <Card style={[styles.Input___shadow]}>
            <View style={styles.tabContent}>
              <ExploreIcon active />
              <Text style={[styles.tabText, {color: colors.default}]}>
                Explore
              </Text>
            </View>
            <View style={styles.tabContent}>
              <ChatIcon />
              <Text style={styles.tabText}>Chat</Text>
            </View>
            <View style={styles.tabContent}>
              <HistoryIcon />
              <Text style={styles.tabText}>History</Text>
            </View>
          </Card>
        )}
        <ExploreSlider
          {...this.props}
          explore={() => this.props.navigation.navigate('ArtisanExplore')}
          hideTab={e => this.setState({hideTab: e})}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nav: {
    zIndex: 1000,
    height: '24%',
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
    padding: 20,
  },
  text1: {
    color: colors.white,
    fontSize: 24,
  },
  text2: {
    color: colors.white,
  },
  thumbnail: {
    width: 40,
    height: 40,
    borderColor: colors.default,
    borderWidth: 2,
  },
  tabNavigation: {},
  Input___shadow: {
    position: 'absolute',
    bottom: 30,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 50,
    flexDirection: 'row',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
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
  categoryContainer: {
    zIndex: 500,
    height: '8%',
    // width: '100%',
  },
  tagContainer: {
    height: '100%',
    justifyContent: 'center',
  },
  tagChild: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  tagText: {
    textAlign: 'center',
    marginLeft: 5,
    fontFamily: fonts.nunitoMedium,
  },
  tagText2: {
    textAlign: 'center',
    marginLeft: 5,
    fontFamily: fonts.nunitoMedium,
    color: colors.white,
  },
  subTag: {},
});

export default Home;
