import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { staticDataReducer } from '../../store/static-data.reducers';

// tslint:disable-next-line: no-empty-interface
export interface AppState {

}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer
};
