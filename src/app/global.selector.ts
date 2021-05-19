import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StaticDataState } from '../store/static-data.reducers';

export const selectStaticDataState =
  createFeatureSelector<StaticDataState>('staticData');

export const staticData = createSelector(
  selectStaticDataState,
  // tslint:disable-next-line: no-shadowed-variable
  (staticData) => staticData
);
