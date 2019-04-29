import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MainHomeComponent} from './home/main-home.component';
import {BoardMainComponent} from './board/board-main/board-main.component';
import {CreateBoardComponent} from './board/create-board/create-board.component';
import {ReadBoardComponent} from './board/read-board/read-board.component';
import {UpdateBoardComponent} from './board/update-board/update-board.component';

const routes: Routes = [
  {path: 'main', redirectTo: 'main/board', pathMatch: 'full'},
  {
    path: 'main',
    component: MainHomeComponent,
    children: [
      {path: 'create', component: CreateBoardComponent},
      {path: 'read/:id', component: ReadBoardComponent},
      {path: 'update/:id', component: UpdateBoardComponent},
      {path: 'board', component: BoardMainComponent}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
