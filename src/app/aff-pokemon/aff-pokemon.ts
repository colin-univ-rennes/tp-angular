import { Component, inject, Input, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PokeApiService } from '../poke-api-service';
import { Pokemon } from '../pokemon';
import { PokemonCommunicationService } from '../pokemon-communication.service';

@Component({
  selector: 'app-aff-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './aff-pokemon.html',
  styleUrl: './aff-pokemon.css',
  providers: [PokeApiService]
})
export class AffPokemon implements OnInit, OnChanges, OnDestroy {
  pokemon!: Pokemon;
  private subscription: Subscription = new Subscription();

  private pokeApiService = inject(PokeApiService);
  private pokemonCommunicationService = inject(PokemonCommunicationService);

  @Input() id!: number;

  ngOnInit() {
    this.fetchPokemon();

    // Subscribe to pokemon ID changes from the communication service
    this.subscription.add(
      this.pokemonCommunicationService.pokemonId$.subscribe(pokemonId => {
        if (pokemonId) {
          this.fetchPokemonById(pokemonId);
        }
      })
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['id'] && !changes['id'].isFirstChange()) {
      this.fetchPokemon();
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private fetchPokemon() {
    if (this.id) {
      this.pokeApiService.getPokemon(this.id).subscribe(pokemon => {
        this.pokemon = new Pokemon(pokemon);
      });
    }
  }

  private fetchPokemonById(id: number) {
    this.pokeApiService.getPokemon(id).subscribe(pokemon => {
      this.pokemon = new Pokemon(pokemon);
    });
  }
}
