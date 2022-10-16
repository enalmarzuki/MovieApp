/* eslint-disable react-hooks/exhaustive-deps */
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RESET_DETAIL_MOVIE_MOVIE} from '../../../Config/redux/type';
import {useEffect} from 'react';
import {useAppDispatch} from '../../../Config/redux-hooks';
import {
  getCastMovieAction,
  getDetailMovieAction,
  getRelatedMovieAction,
} from '../../../Config/redux/action/detailMovie';
import {RootStackParamList} from '../../../Router';

export const useDetailMovie = (idMovie: number) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useAppDispatch();

  const getMovieDetail = (id: number) => {
    dispatch(getDetailMovieAction(id));
  };
  const getRelatedMovie = (id: number) => {
    dispatch(getRelatedMovieAction(id));
  };
  const getCastMovie = (id: number) => {
    dispatch(getCastMovieAction(id));
  };

  const onClickMovie = (movieId: number) => {
    navigation.replace('DetailMovie', {
      movieId,
    });
  };

  const onClickCastMovie = (personId: number) => {
    navigation.replace('DetailPerson', {
      personId,
    });
  };

  useEffect(() => {
    getMovieDetail(idMovie);
    getRelatedMovie(idMovie);
    getCastMovie(idMovie);
  }, []);

  useEffect(() => {
    return () => {
      dispatch({type: RESET_DETAIL_MOVIE_MOVIE});
    };
  }, []);

  return {
    onClickMovie,
    onClickCastMovie,
  };
};
