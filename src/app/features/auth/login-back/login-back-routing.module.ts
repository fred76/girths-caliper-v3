import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginBackComponent } from './login-back.component';

const routes: Routes = [{ path: '', component: LoginBackComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginBackRoutingModule { }
