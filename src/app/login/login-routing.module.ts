import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginMainComponent} from './main/login-main.component';

const routes: Routes = [
  {path: 'login', component: LoginMainComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
}
