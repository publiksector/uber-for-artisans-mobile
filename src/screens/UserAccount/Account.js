import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  SectionList,
} from 'react-native';
import Text from '../../config/AppText';
import {colors, fonts} from '../../constants/DefaultProps';
import {
  BackIcon,
  Useroutline,
  Key,
  Recorder,
  Bell,
  Heart,
  Envelop,
  Hidden,
} from '../Assets';
import Switch from '../../components/Switch';

const DATA = [
  {
    title: 'Account settings',
    data: [
      {
        text: 'Profile Information',
        icon: <Useroutline />,
        subText: 'Name, Phone number, Avatar',
        color: '#A6D6FF',
        route: 'PersonalInfo',
      },
      {
        text: 'Change Password',
        icon: <Key />,
        subText: 'Change your current password',
        color: '#00C48C',
        route: 'PasswordReset',
      },

      {
        text: 'Payment Methods',
        icon: <Recorder />,
        subText: 'Manage your payment options',
        color: '#9BA6FA',
        route: 'PersonalInfo',
      },
    ],
  },

  {
    title: 'Notifications settings',
    data: [
      {
        text: 'Push Notifications',
        icon: <Bell />,
        route: 'PersonalInfo',
        color: '#FF98A8',
      },
    ],
  },

  {
    title: 'General',
    data: [
      {
        text: 'Rate our App',
        icon: <Heart />,
        subText: 'Rate & REview us ',
        color: '#FFDF92',
        route: 'PersonalInfo',
      },
      {
        text: 'Send Feedback',
        icon: <Envelop />,
        subText: 'Share your thought ',
        color: '#F6BB86',
        route: 'PersonalInfo',
      },

      {
        text: 'Privacy Policy',
        icon: <Hidden />,
        subText: '',
        color: '#96FFE1',
        route: 'PersonalInfo',
      },
    ],
  },
];

function Account(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.nav}>
        <View style={styles.navContent}>
          <View style={styles.navChild}>
            <TouchableOpacity
              onPress={() => props.navigation.goBack()}
              style={styles.icon}>
              <BackIcon />
            </TouchableOpacity>
            <View style={{marginLeft: '25%'}}>
              <Text style={styles.text1}>My Account</Text>
            </View>
          </View>
        </View>
      </View>
      {/* End of Nav */}
      <View style={{flex: 1, backgroundColor: '#FCFCFC'}}>
        <SectionList
          style={{height: '100%'}}
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => (
            <Item navigation={props.navigation} title={item} />
          )}
          renderSectionHeader={({section: {title}}) => (
            <Text
              style={{
                ...styles.text2,
                color: colors.default,
                marginTop: 25,
                marginBottom: 10,
                marginLeft: 25,
              }}>
              {title}
            </Text>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const Item = ({title, navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View
      style={{
        borderBottomWidth: 2,
        borderBottomColor: '#e4e4e47a',
        paddingBottom: 10,
      }}>
      {title.text != 'Push Notifications' && (
        <TouchableOpacity onPress={() => navigation.navigate(title.route)}>
          <View style={styles.item}>
            <View style={{...styles.circle, backgroundColor: title.color}}>
              {title.icon}
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.text2}>{title.text}</Text>
              <Text style={styles.text3}>{title.subText}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}

      {title.text == 'Push Notifications' && (
        <TouchableOpacity onPress={() => navigation.navigate(title.route)}>
          <View
            style={{
              ...styles.item,
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <View style={{flexDirection: 'row'}}>
              <View style={{...styles.circle, backgroundColor: title.color}}>
                {title.icon}
              </View>

              <Text style={styles.text2}>{title.text}</Text>
            </View>

            <Switch onPress={toggleSwitch} value={isEnabled} />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nav: {
    zIndex: 1000,
    height: '15%',
    width: '100%',
    backgroundColor: colors.navColor,
  },
  navContent: {
    height: '100%',
    justifyContent: 'flex-end',
  },
  navChild: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingBottom: 10,
    alignItems: 'flex-start',
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
    marginVertical: 5,
  },
  text3: {
    color: colors.txtGray,
    fontSize: 16,
  },
  circle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    height: 50,
    width: 50,
    marginRight: 20,
  },
  item: {
    flexDirection: 'row',
    padding: 10,
    marginLeft: 15,
  },
});

export default Account;
