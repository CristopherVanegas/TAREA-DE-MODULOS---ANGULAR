import { Component } from '@angular/core';
import { Persona } from '../../models/persona.model';

@Component({
  selector: 'app-persona-list',
  templateUrl: './persona-list.component.html',
})
export class PersonaListComponent {
  personas: Persona[] = [];
  username: string | null = '';

  constructor() {
    this.username = sessionStorage.getItem('username');
    this.personas = [
      { id: 1, nombres: 'Juan Perez', edad: 25, email: 'juan@mail.com' },
      { id: 2, nombres: 'Maria López', edad: 30, email: 'maria@mail.com', celular: '0999999999' }
    ];
  }

  onPersonaAdded(nuevaPersona: Persona) {
    nuevaPersona.id = this.personas.length + 1; // Generar ID basado en la longitud del array
    this.personas.push(nuevaPersona); // Agregar la nueva persona a la lista
  }

  logout() {
    sessionStorage.clear(); // Limpiar toda la sesión
    location.href = '/'; // Redirigir al login
  }
}
