import {configureStore} from '@reduxjs/toolkit';
import reducer from '../reducers';
import thunk from 'redux-thunk';

const middleware = [thunk];

const store = configureStore({
  reducer,
  middleware,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export {store};
