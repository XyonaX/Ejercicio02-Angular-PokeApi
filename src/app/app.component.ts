import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonsListComponent } from './pokemons-list/pokemons-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PokemonsListComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ejercicio02-Angular-Api';
}
