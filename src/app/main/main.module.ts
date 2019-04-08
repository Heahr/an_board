import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { BoardMainComponent } from './board/board-main/board-main.component';
import { CreateBoardComponent } from './board/create-board/create-board.component';
import { ReadBoardComponent } from './board/read-board/read-board.component';
import { UpdateBoardComponent } from './board/update-board/update-board.component';
import {
  MatButtonModule, MatFormFieldControl, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule,
  MatRippleModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
    MainRoutingModule,
    FormsModule,
    MatFormFieldModule,
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatIconModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
  ]
})
export class MainModule { }
