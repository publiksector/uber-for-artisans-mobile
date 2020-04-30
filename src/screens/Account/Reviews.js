import React from 'react';
import {
    View,
    Image,
    StyleSheet,
} from 'react-native';
import Text from '../../config/AppText';
import babysitter1 from '../../imgs/babysitter2.jpeg';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { fonts } from '../../constants/DefaultProps';

export default function (props) {
    return (
        <>
            {props.reviews.map((review, i) => <View key={review.id} style={styles.reviewContainer}>
                <Image
                    style={styles.img}
                    source={babysitter1}
                />
                <View style={styles.reviewContent}>
                    <View style={styles.reviewContentBody}>
                        <Text style={styles.reviewContentTxt}>{review.message}</Text>
                    </View>
                    <View style={styles.reviewContentFooter}>
                        <Text style={styles.reviewDate}>{review.date}</Text>
                        <Rating
                            onFinishRating={this.ratingCompleted}
                            // style={{ margin: 5, }}
                            imageSize={12}
                            ratingCount={5}
                            startingValue={review.rating}
                            readonly
                        />
                    </View>
                </View>
            </View>)}
        </>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 100,
        height: 100,
        borderRadius: 5,
        opacity: 0.9,
        margin: 7,
    },
    reviewContainer: {
        flexDirection: 'row',
        marginTop: 20,
    },
    reviewContent: {
        flex: 1,
        marginVertical: 10,
        marginLeft: 10,
    },
    reviewContentBody: {
        flex: 1,
        width: '80%',
    },
    reviewContentFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    reviewContentTxt: {
        fontSize: 16,
        fontFamily: fonts.nunitoRegular,
    },
    reviewDate: {
        fontSize: 11,
        color: '#999999',
    },
})