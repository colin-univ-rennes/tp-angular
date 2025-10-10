import { Pipe, PipeTransform } from '@angular/core';
import { PokeListItem } from './poke-api-service';

@Pipe({
  name: 'filterPokemonPipe',
  standalone: true
})
export class FilterPokemonPipePipe implements PipeTransform {

  transform(pokes: PokeListItem[], searchString?: string): PokeListItem[] {
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
