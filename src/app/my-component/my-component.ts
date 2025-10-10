import { Component, inject, type OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { FilterPokemonPipePipe } from '../filter-pokemon--pipe-pipe';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PokeApiService, type PokeListItem } from '../poke-api-service';
import { AffPokemon } from '../aff-pokemon/aff-pokemon';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [MatButtonModule, FormsModule, CommonModule, FilterPokemonPipePipe, MatFormFieldModule, MatInputModule, MatIconModule, AffPokemon],
  templateUrl: './my-component.html',
  styleUrl: './my-component.css',
  providers: [PokeApiService]
})
export class MyComponent implements OnInit {
  id: string = '';
  pokemons: PokeListItem[] = [];
  filter: string = '';
  selectedPokemon: number | null = null;

  private pokeApiService = inject(PokeApiService);

  ngOnInit() {
    this.pokeApiService.getPokemons().subscribe(pokemons => {
      this.pokemons = pokemons;
    });
  }

  getSelectedPokemon(): PokeListItem | undefined {
    return this.selectedPokemon ? this.pokemons.find(p => p.id === Number(this.selectedPokemon)) : undefined;
  }

  validateChoice() {
    console.log("GO with", this.getSelectedPokemon());
    console.log("GO with id ", this.selectedPokemon);
  }
}
