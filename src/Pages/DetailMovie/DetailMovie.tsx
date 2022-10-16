import {RouteProp} from '@react-navigation/native';
import {IDataMovie} from '../../Data/constans/Home';
import moment from 'moment';
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ICClock, ICRating} from '../../Assets/icons';
import {Gap} from '../../Components';
import ButtonBackWithIcon from '../../Components/Button/ButtonBackWithIcon';
import Divider from '../../Components/Divider/Divider';
import IconWithText from '../../Components/IconWithText/IconWithText';
import Loading from '../../Components/Loading/Loading';
import {BASE_POSTER_URL} from '../../Config/axios';
import {useAppSelector} from '../../Config/redux-hooks';
import {IReducersDetailMovie} from '../../Config/redux/reducers/detailMovie';
import {ICastType, IGenreType} from '../../Data/constans/DetailMovie';
import {RootStackParamList} from '../../Router';
import {colors} from '../../Utils/colors';
import AvatarRnd from './Components/AvatarRnd/AvatarRnd';
import CardRelatedMovie from './Components/CardRelatedMovie/CardRelatedMovie';
import {styles} from './DetailMovieStyles';
import {useDetailMovie} from './Hooks/useDetailMovie';

export interface IDetailMovieProps {
  route: RouteProp<RootStackParamList, 'DetailMovie'>;
}

const DetailMovie: React.FC<IDetailMovieProps> = ({route}) => {
  const {movieId} = route.params;
  const useDetailMovieHooks = useDetailMovie(movieId);
  const {data, isLoading, relatedMovies, castMovies}: IReducersDetailMovie =
    useAppSelector(state => state.detailMovie);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor={colors.backgroundPrimary} />

      <View style={styles.contentWrapper}>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {!data ? null : (
              <ScrollView>
                <ButtonBackWithIcon />
                <View style={styles.imgMovieWrapper}>
                  <Image
                    source={{
                      uri: `${BASE_POSTER_URL}${data?.backdrop_path}`,
                    }}
                    style={styles.imgMovie}
                  />
                </View>

                <Gap height={24} />

                <View style={styles.bodyWrapper}>
                  <View style={styles.movieTitleWrapper}>
                    <Text style={styles.movieTitle}>{data?.title || '-'}</Text>
                    <Gap width={10} />
                    <Text style={styles.movieLanguage}>
                      {data?.spoken_languages
                        ? data?.spoken_languages[0]?.name
                        : '-'}
                    </Text>
                  </View>

                  <Gap height={12} />

                  <View style={styles.iconContentWrapper}>
                    <IconWithText
                      icon={ICClock}
                      text={`${data?.runtime || '0'} minutes`}
                    />
                    <Gap width={12} />
                    <IconWithText
                      icon={ICRating}
                      text={`${data?.vote_average?.toFixed(1) || '0'}`}
                    />
                  </View>

                  <Gap height={16} />
                  <Divider />
                  <Gap height={16} />

                  <View style={styles.infoMovieWrapper}>
                    <View style={styles.movieReleaseWrapper}>
                      <Text style={styles.movieReleaseTitle}>Release date</Text>
                      <Gap height={12} />
                      <Text style={styles.movieReleaseDesc}>
                        {moment(data?.release_date).format('MMMM D, YYYY')}
                      </Text>
                    </View>

                    <View style={styles.movieReleaseWrapper}>
                      <Text style={styles.movieReleaseTitle}>Genre</Text>
                      <Gap height={12} />
                      <View style={styles.movieGenreWrapper}>
                        {data?.genres?.map((genre: IGenreType) => (
                          <Text key={genre?.id} style={styles.movieGenre}>
                            {genre?.name}
                          </Text>
                        ))}
                      </View>
                    </View>
                  </View>

                  <Gap height={16} />
                  <Divider />
                  <Gap height={16} />

                  <View>
                    <Text style={styles.movieReleaseTitle}>Synopsis</Text>
                    <Gap height={12} />
                    <Text style={styles.movieOverview}>
                      {data?.overview || '-'}
                    </Text>
                  </View>

                  <Gap height={20} />

                  <View>
                    <Text style={styles.movieReleaseTitle}>Top Cast</Text>
                    <Gap height={16} />
                    <ScrollView
                      horizontal
                      showsHorizontalScrollIndicator={false}>
                      {castMovies?.map((cast: ICastType) => (
                        <TouchableOpacity
                          key={cast.id}
                          onPress={() =>
                            useDetailMovieHooks.onClickCastMovie(cast.id)
                          }>
                          <AvatarRnd data={cast} />
                        </TouchableOpacity>
                      ))}
                    </ScrollView>
                  </View>

                  <Gap height={24} />

                  <View>
                    <Text style={styles.movieReleaseTitle}>Related Movies</Text>
                    <Gap height={16} />
                    <ScrollView
                      horizontal
                      showsHorizontalScrollIndicator={false}>
                      {relatedMovies?.map((movie: IDataMovie) => (
                        <TouchableOpacity
                          key={movie?.id}
                          onPress={() =>
                            useDetailMovieHooks.onClickMovie(movie.id)
                          }>
                          <CardRelatedMovie data={movie} />
                        </TouchableOpacity>
                      ))}
                    </ScrollView>
                  </View>
                </View>
                <Gap height={20} />
              </ScrollView>
            )}
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default DetailMovie;
