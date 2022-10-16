import {AppThunk} from 'Data/constans/AppThunk';
import API, {MOVIE} from '../../axios';
import {
  API_CAST_MOVIE_SUCCESS,
  API_DETAIL_MOVIE_FAILURE,
  API_DETAIL_MOVIE_REQUEST,
  API_DETAIL_MOVIE_SUCCESS,
  API_RELATED_MOVIE_SUCCESS,
} from '../type';

export const getDetailMovieAction =
  (movieId: number): AppThunk =>
  dispatch => {
    dispatch({type: API_DETAIL_MOVIE_REQUEST});
    API.get(`${MOVIE}/${movieId}`)
      .then(res => {
        return dispatch({type: API_DETAIL_MOVIE_SUCCESS, data: res.data});
      })
      .catch(err => {
        dispatch({type: API_DETAIL_MOVIE_FAILURE, error: err?.response});
      });
  };

export const getRelatedMovieAction =
  (movieId: number): AppThunk =>
  dispatch => {
    dispatch({type: API_DETAIL_MOVIE_REQUEST});
    API.get(`${MOVIE}/${movieId}/similar`, {
      params: {
        page: 1,
      },
    })
      .then(res => {
        return dispatch({
          type: API_RELATED_MOVIE_SUCCESS,
          data: res.data.results,
        });
      })
      .catch(err => {
        dispatch({type: API_DETAIL_MOVIE_FAILURE, error: err?.response});
      });
  };

export const getCastMovieAction =
  (movieId: number): AppThunk =>
  dispatch => {
    dispatch({type: API_DETAIL_MOVIE_REQUEST});
    API.get(`${MOVIE}/${movieId}/credits`)
      .then(res => {
        return dispatch({
          type: API_CAST_MOVIE_SUCCESS,
          data: res.data.cast,
        });
      })
      .catch(err => {
        dispatch({type: API_DETAIL_MOVIE_FAILURE, error: err?.response});
      });
  };
