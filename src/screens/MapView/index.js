import React from 'react';
import { StyleSheet, View, Dimensions, Platform } from 'react-native';

import MapView, { ProviderPropType } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = Platform.OS == 'android' ? 0.007 : 0.008;
const LONGITUDE_DELTA = Platform.OS == 'android' ? 0.007 : 0.008;

const initialRegion = {
    latitude: -37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
}

class ShowMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ready: true,
        };
    }

    componentDidMount() {
        this.getCurrentPosition();
    }

    setRegion = (region) => {
        if (this.state.ready) {
            setTimeout(() => this.map.animateToRegion(region), 10);
        }
    }

    getCurrentPosition() {
        try {
            Geolocation.getCurrentPosition(
                (position) => {
                    const region = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                    };
                    this.setRegion(region);
                },
                (error) => {
                    console.log(error.message);
                },
                { enableHighAccuracy: true, timeout: 20000, }
            );
        } catch (e) {
            alert(e.message || "");
        }
    };

    onMapReady = (e) => {
        if (!this.state.ready) {
            this.setState({ ready: true });
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    ref={e => (this.map = e)}
                    provider={'google'}
                    style={styles.map}
                    showsUserLocation={true}
                    showsMyLocationButton={false}
                    followUserLocation={true}
                    showsCompass={true}
                    loadingEnabled={true}
                >
                    {/* <View style={{ height: 200, width: 50, backgroundColor: 'red', position: 'relative', top: 250, left: 200 }}></View> */}
                </MapView>
            </View>
        );
    }
}

ShowMap.propTypes = {
    provider: ProviderPropType,
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default ShowMap;