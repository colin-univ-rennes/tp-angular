import { Component, inject, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { PokeApiService } from '../poke-api-service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-aff-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './aff-pokemon.html',
  styleUrl: './aff-pokemon.css',
  providers: [PokeApiService]
})
export class AffPokemon implements OnInit, OnChanges {
  pokemon!: Pokemon;

  private pokeApiService = inject(PokeApiService);

  @Input() id!: number;

  ngOnInit() {
    this.fetchPokemon();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['id'] && !changes['id'].isFirstChange()) {
      this.fetchPokemon();
    }
  }

  private fetchPokemon() {
    this.pokeApiService.getPokemon(this.id).subscribe(pokemon => {
      this.pokemon = new Pokemon(pokemon);
    });
  }
}
