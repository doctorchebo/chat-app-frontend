// types.ts
import { ThunkAction } from '@reduxjs/toolkit';
import { RootState } from './rootReducer';
import { Action } from 'redux';
import store from './store';

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
