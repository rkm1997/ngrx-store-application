import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { StaticDataActions } from 'src/store/action.types';
import { StaticDataState } from 'src/store/static-data.reducers';
import { loadStaticData } from '../store/static-data.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'NGRX-Store-Appliation';

  constructor(private store: Store<StaticDataState>) {}
  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.store.dispatch(StaticDataActions.loadStaticData());
  }
}
