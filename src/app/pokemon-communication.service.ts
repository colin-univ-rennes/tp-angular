import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonCommunicationService {
  private pokemonIdSubject = new BehaviorSubject<number | null>(null);
  private pokemonId: number | null = null;

  /**
   * Observable that emits when the pokemon ID changes
   */
  public pokemonId$: Observable<number | null> = this.pokemonIdSubject.asObservable();

  /**
   * Set the current pokemon ID and notify subscribers
   * @param id The pokemon ID to set
   */
  setPokemonId(id: number | null): void {
    this.pokemonId = id;
    this.pokemonIdSubject.next(id);
  }

  /**
   * Get the current pokemon ID
   * @returns The current pokemon ID
   */
  getPokemonId(): number | null {
    return this.pokemonId;
  }
}
