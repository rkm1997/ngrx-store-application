import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { StaticDataActions } from './action.types';
import { concatMap, map } from 'rxjs/operators';
import { PaymentService } from '../app/services/payment-service.service';
import { Action } from 'rxjs/internal/scheduler/Action';
import { allStaticDataLoaded } from './static-data.action';
// import  {loadStaticData} from '../app/global.selector';

@Injectable()
export class StaticDataEffects {
  constructor(private actions$: Actions,
              private paymentService: PaymentService) {

  }

  loadStaticData$ = createEffect(() => this.actions$.pipe(
    ofType(StaticDataActions.loadStaticData),
    concatMap(action =>
      this.paymentService.getStaticData()),
         map(staticData => allStaticDataLoaded({ staticData })),
  ));
}




