import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EntityDataModule } from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { staticDataReducer } from '../store/static-data.reducers';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StaticDataEffects } from 'src/store/static-data.effects';
import { reducers } from './reducers';
import { PaymentService } from './services/payment-service.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UserDetailsComponent } from './components/user-details/user-details.component';


@NgModule({
  declarations: [AppComponent, UserDetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: false,
        strictActionSerializability: false,
      },
    }),
    EffectsModule.forRoot([StaticDataEffects]),
    StoreModule.forRoot({ 'staticData': staticDataReducer }),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
      routerState: RouterState.Minimal,
    }),
  ],
  // EffectsModule.forRoot([]),
  // StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  // EntityDataModule.forRoot(entityConfig);

  providers: [Store,PaymentService],
  bootstrap: [AppComponent],
})
export class AppModule {}
