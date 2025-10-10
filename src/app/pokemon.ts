import { PokemonData } from "./poke-api-service"

export class Pokemon {
  id: number
  name: string
  height?: number
  weight?: number
  base_experience?: number
  sprites?: any
  types?: any[]
  stats?: any[]
  abilities?: any[]
  species?: any

  constructor(data: PokemonData) {
    this.id = data.id;
    this.name = data.name;
    this.height = data.height;
    this.weight = data.weight;
    this.base_experience = data.base_experience;
    this.sprites = data.sprites;
    this.types = data.types;
    this.stats = data.stats;
    this.abilities = data.abilities;
    this.species = data.species;
  }

  // Helper methods for common data access
  getImageUrl(): string | null {
    return this.sprites?.front_default || null;
  }

  getShinyImageUrl(): string | null {
    return this.sprites?.front_shiny || null;
  }

  getOfficialArtwork(): string | null {
    return this.sprites?.other?.['official-artwork']?.front_default || null;
  }

  getTypeNames(): string[] {
    return this.types?.map(type => type.type.name) || [];
  }

  getStatValue(statName: string): number | null {
    const stat = this.stats?.find(s => s.stat.name === statName);
    return stat ? stat.base_stat : null;
  }

  getAbilityNames(): string[] {
    return this.abilities?.map(ability => ability.ability.name) || [];
  }
}
