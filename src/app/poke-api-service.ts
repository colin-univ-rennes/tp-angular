import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

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

export interface PokemonData {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  sprites: any;
  types: any[];
  stats: any[];
  abilities: any[];
  moves: any[];
  species: any;
  [key: string]: any;
}

export interface PokeListItem {
  name: string;
  url: string;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  private http = inject(HttpClient);

  getPokemons(): Observable<PokeListItem[]> {
    return this.http.get<PokemonApiResponse>('https://pokeapi.co/api/v2/pokemon?limit=50').pipe(
      map(response =>
        response.results.map(result => ({
          name: result.name,
          url: result.url,
          id: parseInt(result.url.split('/').at(-2) ?? "")
        }))
      )
    );
  }

  getPokemon(name: string | number) {
    return this.http.get<PokemonData>(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}
