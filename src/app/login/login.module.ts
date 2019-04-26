import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatMenuModule,
  MatSelectModule
} from '@angular/material';

import {LoginRoutingModule} from './login-routing.module';
import {LoginMainComponent} from './main/login-main.component';
import {RegisterComponent} from './register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
  exports: [
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
  ],
  providers: [
  ]
})
export class LoginModule {
}
