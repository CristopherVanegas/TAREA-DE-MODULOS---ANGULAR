import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { PersonaListComponent } from './personas/persona-list/persona-list.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent }, // Ruta principal por defecto
  { path: 'personas', component: PersonaListComponent }, // Ruta a la lista de personas
  { path: '**', redirectTo: '' } // Redirección para cualquier ruta no encontrada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
