import { Component, OnInit } from '@angular/core';
import { PokemonApiService } from '../services/pokemon-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemons-list',
  standalone: true,
  imports: [CommonModule],
  providers: [PokemonApiService],
  templateUrl: './pokemons-list.component.html',
  styleUrl: './pokemons-list.component.css'
})
export class PokemonsListComponent implements OnInit {
  PokemonList: any[] = [];

  constructor(private PokemonApiService: PokemonApiService){}

  ngOnInit(): void {
      this.PokemonApiService.getPokemonList().subscribe((data: any[]) =>
      {
        this.PokemonList = data;
      })
  }
}
