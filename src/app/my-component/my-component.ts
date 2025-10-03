import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../pokemon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { FilterPokemonPipePipe } from '../filter-pokemon--pipe-pipe';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [MatButtonModule, FormsModule, CommonModule, FilterPokemonPipePipe, MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './my-component.html',
  styleUrl: './my-component.css',
})
export class MyComponent {
  id: string = '';
  pokemons: Pokemon[] = [new Pokemon(1, 'Pikachu'), new Pokemon(2, 'Charizard'), new Pokemon(3, 'Mewtwo'), new Pokemon(4, 'Mew'), new Pokemon(5, 'Blastoise')];
  filter: string = '';
  selectedPokemon: number | null = null;

  getSelectedPokemon(): Pokemon | undefined {
    return this.selectedPokemon ? this.pokemons.find(p => p.id === Number(this.selectedPokemon)) : undefined;
  }

  validateChoice() {
    console.log("GO with", this.getSelectedPokemon());
    console.log("GO with id ", this.selectedPokemon);
  }
}
