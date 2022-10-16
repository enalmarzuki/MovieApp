import moment from 'moment';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {BASE_POSTER_URL} from '../../../../Config/axios';
import {IDataMovie} from '../../../../Config/redux/reducers/home';
import {colors} from '../../../../Utils/colors';
import {fonts} from '../../../../Utils/fonts';

interface ICardRelatedMovieProps {
  data: IDataMovie;
}

const CardRelatedMovie: React.FC<ICardRelatedMovieProps> = ({data}) => {
  return (
    <View style={styles.cardWrapper}>
      <View style={styles.cardMovieBody}>
        <Image
          source={{uri: `${BASE_POSTER_URL}${data?.poster_path}`}}
          style={styles.movieThumbnail}
        />
      </View>
      <View style={styles.cardFooter}>
        <Text style={styles.movieTitle} numberOfLines={1}>
          {data?.original_title || '-'} {moment(data.release_date).year()}
        </Text>
      </View>
    </View>
  );
};

export default CardRelatedMovie;

const styles = StyleSheet.create({
  cardWrapper: {
    width: wp('45%'),
    height: hp('20%'),
    marginRight: 18,
  },
  cardMovieBody: {
    width: '100%',
    height: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  movieThumbnail: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  cardFooter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  movieTitle: {
    fontFamily: fonts.primary.Regular,
    fontSize: 18,
    color: colors.White,
  },
});
