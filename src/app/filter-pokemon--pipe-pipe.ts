import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from './pokemon';

@Pipe({
  name: 'filterPokemonPipe',
  standalone: false
})
export class FilterPokemonPipePipe implements PipeTransform {

  transform(pokes: Pokemon[], searchString?: string): Pokemon[] {
    if (typeof searchString == 'undefined') {
      return pokes;
    }
    else if (typeof pokes !== 'undefined') {
      return pokes.filter((poke) => {
        return poke.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
      });
    } else {
      return [];
    }
  }

}
