import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  private http = inject(HttpClient);

  getPokemons() {
    return this.http.get('https://pokeapi.co/api/v2/pokemon');
  }
}
