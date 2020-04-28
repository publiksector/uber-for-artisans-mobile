import React from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import { Icon } from 'native-base';

const { width, height } = Dimensions.get('window');
class Alert extends React.Component {
    state = {
        isVisible: false,
    }

    render() {
        const { isVisible, } = this.props;

        return (
            <>
                {isVisible ? <View style={styles.container}>
                    {!this.props.hideCloseBtn ? <View style={{ position: "absolute", top: 30, right: 0, padding: 30, }}>
                        <TouchableOpacity
                            onPress={() => this.props.closeModal()}
                            activeOpacity={0.7}>
                            <Icon
                                style={{ fontSize: 60, color: "#ffffff" }}
                                type="Ionicons"
                                name="ios-close" />
                        </TouchableOpacity>
                    </View> : null}
                    <View style={styles.child___container}>
                        <View style={{ paddingVertical: 10, paddingHorizontal: 0, alignItems: 'center', }}>
                            {this.props.children}
                        </View>
                    </View>
                </View> : null}
            </>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        flex: 1,
        // zIndex: 1000,
        elevation: 500,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        // backgroundColor: 'rgba(0,0,0,0.5)'
    },
    child___container: {
        backgroundColor: '#FFFFFF',
        width: "60%",
        // zIndex: 500,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        // elevation: 1,
    },
});

export default Alert;