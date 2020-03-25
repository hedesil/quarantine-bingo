import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainViewComponent} from './views/main-view/main-view.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {GameMenuComponent} from './views/main-view/game-menu/game-menu.component';
import {PlayerMenuComponent} from './views/main-view/player-menu/player-menu.component';
import {DialogNewPlayerComponent} from './views/main-view/player-menu/dialog-new-player/dialog-new-player.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import {DialogNewGameComponent} from './views/main-view/game-menu/dialog-new-game/dialog-new-game.component';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {StoreModule} from '@ngrx/store';
import {environment} from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {RouterState, StoreRouterConnectingModule} from '@ngrx/router-store';
import * as fromGameSession from './views/main-view/game-menu/store/game-sessions.reducer';


@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    GameMenuComponent,
    PlayerMenuComponent,
    DialogNewPlayerComponent,
    DialogNewGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule,
    MatGridListModule,
    FormsModule,
    MatInputModule,
    StoreModule.forRoot({}, {
      metaReducers: !environment.production ? [] : [],
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true
      }
    }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({routerState: RouterState.Minimal}),
    StoreModule.forFeature(
      fromGameSession.gameSessionFeatureKey,
      fromGameSession.reducer
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
