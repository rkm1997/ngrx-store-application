import { createAction, props } from '@ngrx/store';
import { StaticDataList } from '../app/models/static-data.model';


export const loadStaticData = createAction('[appcomponent ngOnInit] get all static Data');

export const allStaticDataLoaded = createAction
                    ('[Load Static Data Effect] All Static Data Loaded' ,
                    props<{ staticData: StaticDataList }>());
