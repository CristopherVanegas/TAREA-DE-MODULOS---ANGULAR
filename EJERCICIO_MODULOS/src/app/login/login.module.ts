import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule } from '@angular/forms'; // Para ngModel

@NgModule({
  declarations: [
    LoginPageComponent, // Solo declara los componentes que son específicos de este módulo
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class LoginModule { }
