import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaListComponent } from './persona-list/persona-list.component';
import { PersonaFormComponent } from './persona-form/persona-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PersonaListComponent,
    PersonaFormComponent // Declarar el componente aquí
  ],
  imports: [
    CommonModule,
    FormsModule // Importar FormsModule si se usa ngModel en estos componentes
  ]
})
export class PersonasModule { }
