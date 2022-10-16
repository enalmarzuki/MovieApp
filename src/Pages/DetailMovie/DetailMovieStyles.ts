import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {colors} from '../../Utils/colors';
import {fonts} from '../../Utils/fonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundPrimary,
  },
  contentWrapper: {
    flex: 1,
  },
  imgMovieWrapper: {
    width: wp('100%'),
    height: hp('40%'),
  },
  imgMovie: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  bodyWrapper: {
    paddingHorizontal: 20,
  },
  movieTitleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  movieTitle: {
    fontFamily: fonts.primary.Bold,
    fontSize: 26,
    color: colors.White,
    flex: 1,
  },
  movieLanguage: {
    fontFamily: fonts.primary.Regular,
    fontSize: 16,
    color: colors.placeholder,
    borderWidth: 0.5,
    borderColor: colors.placeholder,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: colors.backgroundSecondary,
  },
  iconContentWrapper: {
    flexDirection: 'row',
  },
  infoMovieWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  movieReleaseWrapper: {
    width: wp('43%'),
  },
  movieReleaseTitle: {
    fontFamily: fonts.primary.Bold,
    fontSize: 18,
    color: colors.White,
  },
  movieReleaseDesc: {
    fontFamily: fonts.primary.Regular,
    fontSize: 16,
    color: colors.placeholder,
  },
  movieGenreWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  movieGenre: {
    fontFamily: fonts.primary.Regular,
    fontSize: 14,
    color: colors.placeholder,
    borderWidth: 0.5,
    borderColor: colors.placeholder,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    marginRight: 8,
    marginBottom: 6,
    backgroundColor: colors.backgroundSecondary,
  },
  movieOverview: {
    fontFamily: fonts.primary.Regular,
    fontSize: 16,
    color: colors.placeholder,
    lineHeight: 24,
  },
});
