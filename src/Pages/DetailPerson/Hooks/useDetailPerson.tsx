/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect} from 'react';
import {useAppDispatch} from '../../../Config/redux-hooks';
import {
  getDetailPersonAction,
  getPersonMoviesAction,
} from '../../../Config/redux/action/detailPerson';

export const useDetailPerson = (idPerson: number) => {
  const dispatch = useAppDispatch();

  const getPersonDetail = (id: number) => {
    dispatch(getDetailPersonAction(id));
  };

  const getPersonMovies = (id: number) => {
    dispatch(getPersonMoviesAction(id));
  };

  useEffect(() => {
    getPersonDetail(idPerson);
    getPersonMovies(idPerson);
  }, []);
};
