import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatDialogModule, MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule, MatPaginatorModule, MatProgressSpinnerModule,
  MatRippleModule, MatSelectModule, MatSortModule, MatTabGroup, MatTableModule, MatTabsModule
} from '@angular/material';

import {MainHomeComponent} from './home/main-home.component';
import {BoardMainComponent} from './board/board-main/board-main.component';
import {CreateBoardComponent} from './board/create-board/create-board.component';
import {ReadBoardComponent} from './board/read-board/read-board.component';
import {UpdateBoardComponent} from './board/update-board/update-board.component';
import {DeleteBoardComponent} from './board/delete-board/delete-board.component';

import {MainRoutingModule} from './main-routing.module';
import {BoardModule} from './board/board.module';
import {HttpClientModule} from '@angular/common/http';

import {BoardmenuResolve} from './board/shared/boardmenu.resolve';

@NgModule({
  declarations: [
    MainHomeComponent,
    CreateBoardComponent,
    ReadBoardComponent,
    UpdateBoardComponent,
    BoardMainComponent,
    DeleteBoardComponent,
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
    MatDividerModule,
    MatSelectModule,
    HttpClientModule,
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatIconModule,
    MatMenuModule,
    BrowserAnimationsModule,
  ],
  entryComponents: [
    DeleteBoardComponent
  ],
  providers: [
    BoardmenuResolve,
  ]
})
export class MainModule {
}
