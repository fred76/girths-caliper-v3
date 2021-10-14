import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginBackRoutingModule } from './login-back-routing.module';
import { LoginBackComponent } from './login-back.component';


@NgModule({
  declarations: [
    LoginBackComponent
  ],
  imports: [
    CommonModule,
    LoginBackRoutingModule
  ]
})
export class LoginBackModule { }
