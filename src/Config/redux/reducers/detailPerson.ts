import {
  API_DETAIL_PERSON_FAILURE,
  API_DETAIL_PERSON_REQUEST,
  API_DETAIL_PERSON_SUCCESS,
  API_MOVIES_PERSON_SUCCESS,
  RESET_DETAIL_PERSON,
} from '../type';

export interface IReducersPersonDetail {
  isLoading: boolean;
  error: any;
  data: any;
  movies: any;
}

const initialState = {
  isLoading: false,
  error: null,
  data: [],
  movies: [],
};

const reducer = (state: IReducersPersonDetail = initialState, action: any) => {
  switch (action.type) {
    case API_DETAIL_PERSON_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case API_DETAIL_PERSON_SUCCESS:
      return {
        ...state,
        data: action.data,
        isLoading: false,
      };

    case API_MOVIES_PERSON_SUCCESS:
      return {
        ...state,
        movies: action.data,
        isLoading: false,
      };

    case API_DETAIL_PERSON_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    case RESET_DETAIL_PERSON:
      return {
        ...state,
        isLoading: false,
        error: null,
        data: [],
        movies: [],
      };

    default:
      return state;
  }
};

export default reducer;
