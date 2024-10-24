import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonaListComponent } from './persona-list/persona-list.component';
import { PersonaFormComponent } from './persona-form/persona-form.component';

const routes: Routes = [
  { path: 'personas', component: PersonaListComponent }, // Lista de personas
  { path: 'personas/nueva', component: PersonaFormComponent }, // Formulario para agregar persona
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonasRoutingModule { }
