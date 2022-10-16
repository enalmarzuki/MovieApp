import {
  API_CAST_MOVIE_SUCCESS,
  API_DETAIL_MOVIE_FAILURE,
  API_DETAIL_MOVIE_REQUEST,
  API_DETAIL_MOVIE_SUCCESS,
  API_RELATED_MOVIE_SUCCESS,
  RESET_DETAIL_MOVIE_MOVIE,
} from '../type';

export interface IReducersDetailMovie {
  isLoading: boolean;
  error: any;
  data: any;
  relatedMovies: any;
  castMovies: any;
}

const initialState = {
  isLoading: false,
  error: null,
  data: [],
  relatedMovies: [],
  castMovies: [],
};

const reducer = (state: IReducersDetailMovie = initialState, action: any) => {
  switch (action.type) {
    case API_DETAIL_MOVIE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case API_DETAIL_MOVIE_SUCCESS:
      return {
        ...state,
        data: action.data,
        error: '',
        isLoading: false,
      };

    case API_RELATED_MOVIE_SUCCESS:
      return {
        ...state,
        relatedMovies: action.data,
        error: '',
        isLoading: false,
      };

    case API_CAST_MOVIE_SUCCESS:
      return {
        ...state,
        castMovies: action.data,
        error: '',
        isLoading: false,
      };

    case API_DETAIL_MOVIE_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    case RESET_DETAIL_MOVIE_MOVIE:
      return {
        ...state,
        isLoading: false,
        error: null,
        data: [],
        relatedMovies: [],
        castMovies: [],
      };

    default:
      return state;
  }
};

export default reducer;
