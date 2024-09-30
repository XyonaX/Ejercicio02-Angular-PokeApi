import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, switchMap } from 'rxjs';
import {
  PokemonDetails,
  PokemonListResponse,
} from '../interface/pokemon.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonApiService {
  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<PokemonDetails[]> {
    return this.http
      .get<PokemonListResponse>(`${this.baseUrl}/?limit=20&offset=0`)
      .pipe(
        switchMap((response) => {
          const pokemonDetailsRequests = response.results.map((pokemon: any) =>
            this.getPokemonDetails(pokemon.url)
          );
          return forkJoin(pokemonDetailsRequests);
        })
      );
  }

  // Obtener los detalles de un Pokémon específico
  getPokemonDetails(url: string): Observable<PokemonDetails> {
    return this.http.get<PokemonDetails>(url);
  }
}
