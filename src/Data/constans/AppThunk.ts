import {ThunkAction} from '@reduxjs/toolkit';
import {AnyAction} from 'redux';
import {RootState} from 'Config/redux';

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;
