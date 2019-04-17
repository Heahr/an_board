import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BoardRoutingModule} from './board-routing.module';
import {StateComponent} from './state/state.component';
import { DeleteBoardComponent } from './delete-board/delete-board.component';

@NgModule({
  declarations: [
    StateComponent,
    DeleteBoardComponent,
  ],
  imports: [
    CommonModule,
    BoardRoutingModule
  ]
})
export class BoardModule {
}
