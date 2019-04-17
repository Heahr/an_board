import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule, MatPaginatorModule, MatProgressSpinnerModule,
  MatRippleModule, MatSortModule, MatTabGroup, MatTableModule, MatTabsModule
} from '@angular/material';

import {MainHomeComponent} from './home/main-home.component';
import {BoardMainComponent} from './board/board-main/board-main.component';
import {CreateBoardComponent} from './board/create-board/create-board.component';
import {ReadBoardComponent} from './board/read-board/read-board.component';
import {UpdateBoardComponent} from './board/update-board/update-board.component';

import {MainRoutingModule} from './main-routing.module';
import {BoardModule} from './board/board.module';

@NgModule({
  declarations: [
    MainHomeComponent,
    CreateBoardComponent,
    ReadBoardComponent,
    UpdateBoardComponent,
    BoardMainComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    MatFormFieldModule,
    BoardModule,
    MatMenuModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatRippleModule,
    MatButtonModule,
    MatSortModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatDialogModule,
    MatTabsModule,
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatIconModule,
    MatMenuModule,
    BrowserAnimationsModule,
  ]
})
export class MainModule {
}
