import { Component, EventEmitter, Output } from '@angular/core';
import { Persona } from '../../models/persona.model';

@Component({
  selector: 'app-persona-form',
  templateUrl: './persona-form.component.html',
})
export class PersonaFormComponent {
  @Output() personaAdded = new EventEmitter<Persona>();
  persona: Persona = { id: 0, nombres: '', edad: 0, email: '', celular: '' };

  agregarPersona() {
    if (this.persona.nombres && this.persona.email) {
      this.personaAdded.emit({ ...this.persona }); // Emitir objeto Persona
      this.persona = { id: 0, nombres: '', edad: 0, email: '', celular: '' }; // Resetear el formulario
    }
  }
}
