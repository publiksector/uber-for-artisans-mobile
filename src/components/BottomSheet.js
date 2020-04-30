import React, { Component } from 'react';
import { Animated, StyleSheet, Text, View, Dimensions } from 'react-native';
import {
    PanGestureHandler,
    NativeViewGestureHandler,
    State,
    TapGestureHandler,
} from 'react-native-gesture-handler';

import { USE_NATIVE_DRIVER } from '../config/config';

const HEADER_HEIGHT = 50;
const windowHeight = Dimensions.get('window').height;
let SNAP_POINTS_FROM_TOP = [windowHeight * 0.241, windowHeight * 0.4, windowHeight * 0.80];

export class BottomSheet extends Component {
    masterdrawer = React.createRef();
    drawer = React.createRef();
    drawerheader = React.createRef();
    scroll = React.createRef();
    constructor(props) {
        super(props);
        const TOP = 380;
        if (props.top) {
            SNAP_POINTS_FROM_TOP = [props.top, windowHeight * 0.4, props.start || windowHeight * 0.80];
        }
        
        const START = SNAP_POINTS_FROM_TOP[0];
        const END = SNAP_POINTS_FROM_TOP[SNAP_POINTS_FROM_TOP.length - 1];

        this.state = {
            lastSnap: END,
        };

        this._lastScrollYValue = 0;
        this._lastScrollY = new Animated.Value(0);
        this._onRegisterLastScroll = Animated.event(
            [{ nativeEvent: { contentOffset: { y: this._lastScrollY } } }],
            { useNativeDriver: USE_NATIVE_DRIVER }
        );
        this._lastScrollY.addListener(({ value }) => {
            this._lastScrollYValue = value;
        });

        this._dragY = new Animated.Value(0);
        this._onGestureEvent = Animated.event(
            [{ nativeEvent: { translationY: this._dragY } }],
            { useNativeDriver: USE_NATIVE_DRIVER }
        );

        this._reverseLastScrollY = Animated.multiply(
            new Animated.Value(-1),
            this._lastScrollY
        );

        this._translateYOffset = new Animated.Value(END);
        this._translateY = Animated.add(
            this._translateYOffset,
            Animated.add(this._dragY, this._reverseLastScrollY)
        ).interpolate({
            inputRange: [START, END],
            outputRange: [START, END],
            extrapolate: 'clamp',
        });
    }
    _onHeaderHandlerStateChange = ({ nativeEvent }) => {
        if (nativeEvent.oldState === State.BEGAN) {
            this._lastScrollY.setValue(0);
        }
        this._onHandlerStateChange({ nativeEvent });
    };
    _onHandlerStateChange = ({ nativeEvent }) => {
        // console.log(nativeEvent)
        if (nativeEvent.oldState === State.ACTIVE) {
            // alert(nativeEvent.translationX)
            if (nativeEvent.translationX > 50) {
                //show bottom tab
                setTimeout(() => {
                    this.props.hideTab(true);
                }, 10);
            } else if (nativeEvent.translationX <= 50) {
                setTimeout(() => {
                    this.props.hideTab(false);
                }, 10);
            }
            let { velocityY, translationY } = nativeEvent;
            translationY -= this._lastScrollYValue;
            const dragToss = 0.05;
            const endOffsetY =
                this.state.lastSnap + translationY + dragToss * velocityY;

            let destSnapPoint = SNAP_POINTS_FROM_TOP[0];
            for (let i = 0; i < SNAP_POINTS_FROM_TOP.length; i++) {
                const snapPoint = SNAP_POINTS_FROM_TOP[i];
                const distFromSnap = Math.abs(snapPoint - endOffsetY);
                if (distFromSnap < Math.abs(destSnapPoint - endOffsetY)) {
                    destSnapPoint = snapPoint;
                }
            }
            this.setState({ lastSnap: destSnapPoint });
            this._translateYOffset.extractOffset();
            this._translateYOffset.setValue(translationY);
            this._translateYOffset.flattenOffset();
            this._dragY.setValue(0);
            Animated.spring(this._translateYOffset, {
                velocity: velocityY,
                tension: 68,
                friction: 12,
                toValue: destSnapPoint,
                useNativeDriver: USE_NATIVE_DRIVER,
            }).start();
        }
    };
    render() {
        return (
            <TapGestureHandler
                maxDurationMs={100000}
                ref={this.masterdrawer}
                maxDeltaY={this.state.lastSnap - SNAP_POINTS_FROM_TOP[0]}>
                <View style={[StyleSheet.absoluteFillObject, { zIndex: 900 }]} pointerEvents="box-none">
                    <Animated.View
                        style={[
                            StyleSheet.absoluteFillObject,
                            {
                                transform: [{ translateY: this._translateY }],
                            },
                        ]}>
                        <PanGestureHandler
                            ref={this.drawerheader}
                            simultaneousHandlers={[this.scroll, this.masterdrawer]}
                            shouldCancelWhenOutside={false}
                            onGestureEvent={this._onGestureEvent}
                            onHandlerStateChange={this._onHeaderHandlerStateChange}>
                            <Animated.View style={styles.header}>
                                <Animated.View style={styles.drawerIcon}></Animated.View>
                            </Animated.View>
                        </PanGestureHandler>
                        <PanGestureHandler
                            ref={this.drawer}
                            simultaneousHandlers={[this.scroll, this.masterdrawer]}
                            shouldCancelWhenOutside={false}
                            onGestureEvent={this._onGestureEvent}
                            onHandlerStateChange={this._onHandlerStateChange}>
                            <Animated.View style={styles.container}>
                                <NativeViewGestureHandler
                                    ref={this.scroll}
                                    waitFor={this.masterdrawer}
                                    simultaneousHandlers={this.drawer}>
                                    <Animated.ScrollView
                                        style={[
                                            styles.scrollView,
                                            { marginBottom: SNAP_POINTS_FROM_TOP[0] },
                                        ]}
                                        bounces={false}
                                        onScrollBeginDrag={this._onRegisterLastScroll}
                                        scrollEventThrottle={1}>
                                        {this.props.children}
                                    </Animated.ScrollView>
                                </NativeViewGestureHandler>
                            </Animated.View>
                        </PanGestureHandler>
                    </Animated.View>
                </View>
            </TapGestureHandler>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    header: {
        height: HEADER_HEIGHT,
        backgroundColor: '#ffffff',
        justifyContent: 'flex-start',
        paddingTop: 20,
        alignItems: 'center',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 5,
    },
    drawerIcon: {
        width: 60,
        height: 6,
        borderRadius: 5,
        backgroundColor: '#BDBDBD',
    }
});