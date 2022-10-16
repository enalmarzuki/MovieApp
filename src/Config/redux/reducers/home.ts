import {IDataMovie} from '../../../Data/constans/Home';
import {
  API_FAILURE,
  API_LIST_END,
  API_REQUEST,
  API_SUCCESS,
  RESET_MOVIE,
} from '../type';

export interface IReducersHome {
  isLoading: boolean;
  isMoreLoading: boolean;
  error: any;
  moreError: any;
  data: IDataMovie[];
  total_pages: number;
}

const initialState = {
  isLoading: false,
  isMoreLoading: false,
  error: null,
  moreError: null,
  data: [],
  total_pages: 0,
};

const reducer = (state: IReducersHome = initialState, action: any) => {
  switch (action.type) {
    case API_REQUEST:
      if (action.page === 1) {
        return {
          ...state,
          isLoading: true,
        };
      } else {
        return {
          ...state,
          isMoreLoading: true,
        };
      }

    case API_SUCCESS:
      return {
        ...state,
        data: [...state.data, ...action.data.results],
        error: '',
        isLoading: false,
        isMoreLoading: false,
      };

    case API_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
        isMoreLoading: false,
      };

    case API_LIST_END:
      return {
        ...state,
        isListEnd: true,
        isLoading: false,
        isMoreLoading: false,
      };

    case RESET_MOVIE:
      return {
        ...state,
        isLoading: false,
        isMoreLoading: false,
        error: null,
        moreError: null,
        data: [],
        isListEnd: false,
      };

    default:
      return state;
  }
};

export default reducer;
