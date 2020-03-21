import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainViewComponent} from './views/main-view/main-view.component';


const routes: Routes = [
  {path: '', component: MainViewComponent, pathMatch: 'full'},
  {path: 'main', component: MainViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
