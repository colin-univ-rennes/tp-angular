import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../pokemon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { FilterPokemonPipePipe } from '../filter-pokemon--pipe-pipe';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PokeApiService } from '../poke-api-service';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [MatButtonModule, FormsModule, CommonModule, FilterPokemonPipePipe, MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './my-component.html',
  styleUrl: './my-component.css',
  providers: [PokeApiService]
})
export class MyComponent implements OnInit {
  id: string = '';
  pokemons: Pokemon[] = [];
  filter: string = '';
  selectedPokemon: number | null = null;

  private pokeApiService = inject(PokeApiService);

  ngOnInit() {
    this.pokeApiService.getPokemons().subscribe(pokemons => {
      this.pokemons = pokemons;
    });
  }

  getSelectedPokemon(): Pokemon | undefined {
    return this.selectedPokemon ? this.pokemons.find(p => p.id === Number(this.selectedPokemon)) : undefined;
  }

  validateChoice() {
    console.log("GO with", this.getSelectedPokemon());
    console.log("GO with id ", this.selectedPokemon);
  }
}
