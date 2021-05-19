import { Action, createReducer, on, ActionReducerMap } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { StaticDataActions } from './action.types';
import { StaticDataList } from '../app/models/static-data.model';

export interface StaticDataState {
  staticData: StaticDataList;
}

export const initialStaticDataState: StaticDataState = {
  staticData: StaticDataList,
};

export const staticDataReducer = createReducer (
  initialStaticDataState,
  on(StaticDataActions.loadStaticData,
    ( state, action ) => {
      console.log('Static Data ==> ' + state, action);
      return {staticData: null as any};
    }
  ),
  on(StaticDataActions.allStaticDataLoaded,
    (state, action) => {
      console.log('Static Data Loaded ==> ' + state, action.staticData);
      return {staticData: action.staticData};
    }
  ),
);


