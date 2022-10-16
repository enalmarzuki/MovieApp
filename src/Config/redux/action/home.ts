import {AppThunk} from 'Data/constans/AppThunk';
import API, {MOVIE} from '../../axios';
import {API_FAILURE, API_REQUEST, API_SUCCESS, RESET_MOVIE} from '../type';

export const getMovieAction =
  (movieType: string, page: number): AppThunk =>
  dispatch => {
    dispatch({type: API_REQUEST, page});
    if (page === 1) {
      dispatch({type: RESET_MOVIE});
      dispatch({type: API_REQUEST, page});
    }
    API.get(`${MOVIE}/${movieType}`, {
      params: {
        page,
      },
    })
      .then(res => {
        return dispatch({type: API_SUCCESS, data: res.data});
      })
      .catch(err => {
        dispatch({type: API_FAILURE, error: err?.response});
      });
  };

export const onSearchMovieAction =
  (keyword: string, page: number): AppThunk =>
  dispatch => {
    dispatch({type: API_REQUEST, page});
    if (page === 1) {
      dispatch({type: RESET_MOVIE});
      dispatch({type: API_REQUEST, page});
    }
    API.get(`search/${MOVIE}`, {
      params: {
        query: keyword,
        page,
        include_adult: false,
      },
    })
      .then(res => {
        return dispatch({type: API_SUCCESS, data: res.data});
      })
      .catch(err => {
        dispatch({type: API_FAILURE, error: err?.response});
      });
  };
