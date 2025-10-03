import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-my-component',
  standalone: false,
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
