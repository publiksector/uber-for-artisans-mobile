import React from 'react';
import {
    View,
    ImageBackground,
    StyleSheet,
    Text,
} from 'react-native';
import { colors } from '../../constants/DefaultProps';
import Button from '../../components/Button';
import { Item, Input } from 'native-base';

export class Onboard extends React.Component {
    state = {
        isProccessing: false,
        validationErr: false,
    }
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text>What's your name</Text>
                    <Text>Let's get to know you</Text>
                </View>

                {this.state.validationErr && <Text style={{ color: colors.danger }}>One or more fields are missing</Text>}
                {this.state.pwMatchErr && <Text style={{ color: colors.danger }}>Password and confirm password does not match</Text>}

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                    <View>
                        <Text style={{ paddingVertical: 8, }}>First name</Text>
                        <Item
                            style={styles.inputTxt}
                            error={(this.firstname === undefined || this.lastname === '') && this.state.validationErr}
                            rounded>
                            <Input
                                onChangeText={e => this.firstname = e}
                                autoCapitalize={'none'}
                                placeholder={'first name'}
                                placeholderTextColor={colors.btnDisabled}
                                style={styles.input}
                            />
                        </Item>
                    </View>
                    <View>
                        <Text style={{ paddingVertical: 8, }}>Last name</Text>
                        <Item
                            style={styles.inputTxt}
                            error={(this.firstname === undefined || this.lastname === '') && this.state.validationErr}
                            rounded>
                            <Input
                                onChangeText={e => this.lastname = e}
                                autoCapitalize={'none'}
                                placeholder={'last name'}
                                placeholderTextColor={colors.btnDisabled}
                                style={styles.input}
                            />
                        </Item>
                    </View>
                </View>

                <View style={{ marginVertical: 10 }}>
                    <Text style={{ paddingVertical: 8, }}>Email</Text>
                    <Item
                        style={styles.inputTxt}
                        error={(this.email === '') && this.state.validationErr}
                        rounded>
                        <Input
                            onChangeText={e => this.email = e}
                            autoCapitalize={'none'}
                            placeholder={'enter a valid email address'}
                            placeholderTextColor={colors.btnDisabled}
                            style={styles.input}
                        />
                    </Item>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputTxt: {
        backgroundColor: "#F7F7F7",
        height: 40,
    }
})

export default Onboard;