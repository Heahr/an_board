import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { BoardComponent } from './board/board.component';
import { CreateBoardComponent } from './board/create-board/create-board.component';
import { ReadBoardComponent } from './board/read-board/read-board.component';
import { UpdateBoardComponent } from './board/update-board/update-board.component';

@NgModule({
  declarations: [
    MainComponent,
    BoardComponent,
    CreateBoardComponent,
    ReadBoardComponent,
    UpdateBoardComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
