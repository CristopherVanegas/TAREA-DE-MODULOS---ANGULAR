import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  private readonly defaultEmail = 'vmtdev@mail.com';
  private readonly defaultPassword = '123456';
  private readonly defaultUsername = 'Dev Bootcamp';

  constructor(private router: Router) {}

  login() {
    if (this.email === this.defaultEmail && this.password === this.defaultPassword) {
      sessionStorage.setItem('username', this.defaultUsername);
      this.router.navigate(['/personas']);
    } else {
      this.errorMessage = 'Correo o contraseña incorrectos';
    }
  }
}
