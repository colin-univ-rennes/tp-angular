import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-my-component',
  standalone: false,
  templateUrl: './my-component.html',
  styleUrl: './my-component.css'
})
export class MyComponent {
  id: string = '';
  pokemons: Pokemon[] = [new Pokemon('1', 'Pikachu'), new Pokemon('2', 'Charizard'), new Pokemon('3', 'Mewtwo'), new Pokemon('4', 'Mew'), new Pokemon('5', 'Blastoise')];
  selectedPokemon: Pokemon | null = null;

}
