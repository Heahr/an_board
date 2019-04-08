import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { BoardMainComponent } from './board/board-main/board-main.component';
import { CreateBoardComponent } from './board/create-board/create-board.component';
import { ReadBoardComponent } from './board/read-board/read-board.component';
import { UpdateBoardComponent } from './board/update-board/update-board.component';

@NgModule({
  declarations: [
    MainComponent,
    CreateBoardComponent,
    ReadBoardComponent,
    UpdateBoardComponent,
    BoardMainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
