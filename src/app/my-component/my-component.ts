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
import { PokemonCommunicationService } from '../pokemon-communication.service';

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
  private _selectedPokemon: number | null = null;

  get selectedPokemon(): number | null {
    return this._selectedPokemon;
  }

  set selectedPokemon(value: number | null) {
    this._selectedPokemon = value;
    // Automatically notify the communication service when selection changes
    this.pokemonCommunicationService.setPokemonId(value);
  }

  private pokeApiService = inject(PokeApiService);
  private pokemonCommunicationService = inject(PokemonCommunicationService);

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
    // Note: The communication service is automatically updated via the selectedPokemon setter
  }

  searchPokemon() {
    if (!this.id.trim()) {
      this.selectedPokemon = null;
      return;
    }

    const searchValue = this.id.trim().toLowerCase();
    let foundPokemon: PokeListItem | undefined;

    // Check if input is numeric (Pokemon ID)
    if (!isNaN(Number(searchValue))) {
      const pokemonId = Number(searchValue);
      foundPokemon = this.pokemons.find(p => p.id === pokemonId);
    } else {
      // Search by name
      foundPokemon = this.pokemons.find(p => p.name.toLowerCase() === searchValue);
    }

    if (foundPokemon) {
      this.selectedPokemon = foundPokemon.id;
    } else {
      this.selectedPokemon = null;
      console.log(`Pokemon '${this.id}' not found`);
    }
  }
}
