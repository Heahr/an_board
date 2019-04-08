import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { BoardMainComponent } from './board/board-main/board-main.component';
import { CreateBoardComponent } from './board/create-board/create-board.component';
import { ReadBoardComponent } from './board/read-board/read-board.component';
import { UpdateBoardComponent } from './board/update-board/update-board.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: ':board', component: BoardMainComponent }
    ]
  }, {
    path: 'main',
    component: MainComponent,
    children: [
      { path: ':create', component: CreateBoardComponent }
    ]
  }, {
    path: 'main',
    component: MainComponent,
    children: [
      { path: ':read', component: ReadBoardComponent }
    ]
  }, {
    path: 'main',
    component: MainComponent,
    children: [
      { path: ':update', component: UpdateBoardComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class MainRoutingModule { }
