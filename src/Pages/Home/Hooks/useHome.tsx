/* eslint-disable react-hooks/exhaustive-deps */
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useEffect, useState} from 'react';
import {useDebounce} from 'use-debounce';
import {useAppDispatch} from '../../../Config/redux-hooks';
import {
  getMovieAction,
  onSearchMovieAction,
} from '../../../Config/redux/action/home';
import {RootStackParamList} from '../../../Router';
import {useCallback} from 'react';

export const useHome = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [keyword, setKeyword] = useState('');
  const [page, setPage] = useState(1);
  const [movieTypesActive, setMovieTypesActive] = useState('now_playing');
  const [debounceKeyword] = useDebounce(keyword, 300);
  const [refreshing, setRefreshing] = useState(false);

  const dispatch = useAppDispatch();

  const onSearchMovies = (keyValue: string, searchPageNumber: number) => {
    dispatch(onSearchMovieAction(keyValue, searchPageNumber));
  };

  const onChangeKeyword = (key: string) => {
    setKeyword(key);
    setPage(1);
    if (!key) {
      getMovies(movieTypesActive, page);
    }
  };

  const onClickBtnMovieType = (movieType: string) => {
    setMovieTypesActive(movieType);
    getMovies(movieType, 1);
  };

  const onClickMovie = (movieId: number) => {
    navigation.navigate('DetailMovie', {
      movieId: movieId,
    });
  };

  const getMovies = (type: string, pageNumber: number) => {
    dispatch(getMovieAction(type, pageNumber));
    setRefreshing(false);
  };

  useEffect(() => {
    getMovies(movieTypesActive, page);
  }, []);

  useEffect(() => {
    if (keyword.length >= 3) {
      return onSearchMovies(debounceKeyword, 1);
    }
  }, [debounceKeyword]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getMovies(movieTypesActive, 1);
  }, [getMovies]);

  return {
    keyword,
    setKeyword,
    page,
    setPage,
    movieTypesActive,
    setMovieTypesActive,
    onClickBtnMovieType,
    getMovies,
    onSearchMovies,
    onChangeKeyword,
    onClickMovie,
    onRefresh,
    refreshing,
  };
};
