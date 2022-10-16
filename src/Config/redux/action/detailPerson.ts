import {AppThunk} from 'Data/constans/AppThunk';
import API from '../../axios';
import {
  API_DETAIL_PERSON_FAILURE,
  API_DETAIL_PERSON_REQUEST,
  API_DETAIL_PERSON_SUCCESS,
  API_MOVIES_PERSON_SUCCESS,
} from '../type';

export const getDetailPersonAction =
  (personId: number): AppThunk =>
  dispatch => {
    dispatch({type: API_DETAIL_PERSON_REQUEST});
    API.get(`person/${personId}`)
      .then(res => {
        return dispatch({type: API_DETAIL_PERSON_SUCCESS, data: res.data});
      })
      .catch(err => {
        dispatch({type: API_DETAIL_PERSON_FAILURE, error: err?.response});
      });
  };

export const getPersonMoviesAction =
  (personId: number): AppThunk =>
  dispatch => {
    dispatch({type: API_DETAIL_PERSON_REQUEST});
    API.get(`person/${personId}/movie_credits`)
      .then(res => {
        return dispatch({type: API_MOVIES_PERSON_SUCCESS, data: res.data.cast});
      })
      .catch(err => {
        dispatch({type: API_DETAIL_PERSON_FAILURE, error: err?.response});
      });
  };
