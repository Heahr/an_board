import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';

import {LoginRoutingModule} from './login-routing.module';
import {LoginMainComponent} from './main/login-main.component';


@NgModule({
  declarations: [
    LoginMainComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
  ],
  exports: [
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
  ]
})
export class LoginModule {
}
