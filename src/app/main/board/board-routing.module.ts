import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {StateComponent} from './state/state.component';
import {BoardMainComponent} from './board-main/board-main.component';

const routes: Routes = [
  {
    path: 'main/board',
    component: BoardMainComponent,
    children: [
      {path: ':state', component: StateComponent}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BoardRoutingModule {
}
