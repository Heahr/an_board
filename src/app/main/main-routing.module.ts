import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { BoardMainComponent } from './board/board-main/board-main.component';
import { CreateBoardComponent } from './board/create-board/create-board.component';
import { ReadBoardComponent } from './board/read-board/read-board.component';
import { UpdateBoardComponent } from './board/update-board/update-board.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {path: 'main/create', component: CreateBoardComponent},
      {path: 'main/read/:id', component: ReadBoardComponent},
      {path: 'main/update/:id', component: UpdateBoardComponent},
      {path: 'main/board', component: BoardMainComponent}
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
