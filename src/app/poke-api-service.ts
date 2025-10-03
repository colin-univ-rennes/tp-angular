import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Pokemon } from './pokemon';

interface PokemonApiResult {
  name: string;
  url: string;
}

interface PokemonApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonApiResult[];
}

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  private http = inject(HttpClient);

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<PokemonApiResponse>('https://pokeapi.co/api/v2/pokemon?limit=50').pipe(
      map(response =>
        response.results.map(result => {
          // Extract ID from URL (e.g., "https://pokeapi.co/api/v2/pokemon/1/" -> 1)
          const id = parseInt(result.url.split('/').slice(-2)[0]);
          return new Pokemon(id, result.name);
        })
      )
    );
  }
}
