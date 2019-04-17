import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';

import {LoginRoutingModule} from './login-routing.module';
import {LoginMainComponent} from './main/login-main.component';
import {RegisterComponent} from './register/register.component';


@NgModule({
  declarations: [
    LoginMainComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
  ],
  exports: [
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
  ]
})
export class LoginModule {
}
