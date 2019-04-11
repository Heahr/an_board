import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ErrorComponent} from './error/error.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', component: ErrorComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
