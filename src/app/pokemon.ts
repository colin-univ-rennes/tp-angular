import { PokemonData, Ability, Cries, Species, GameIndex, Move, Sprites, Stat, Type } from "./poke-api-service"

export class Pokemon {
  id: number
  name: string
  height: number
  weight: number
  base_experience: number
  sprites: Sprites
  types: Type[]
  stats: Stat[]
  abilities: Ability[]
  species: Species
  cries: Cries
  forms: Species[]
  game_indices: GameIndex[]
  held_items: any[]
  is_default: boolean
  location_area_encounters: string
  moves: Move[]
  order: number
  past_abilities: any[]
  past_types: any[]

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
    this.cries = data.cries;
    this.forms = data.forms;
    this.game_indices = data.game_indices;
    this.held_items = data.held_items;
    this.is_default = data.is_default;
    this.location_area_encounters = data.location_area_encounters;
    this.moves = data.moves;
    this.order = data.order;
    this.past_abilities = data.past_abilities;
    this.past_types = data.past_types;
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

  // Helper methods for new properties
  getCries(): { latest: string; legacy: string } | null {
    return this.cries || null;
  }

  getFormNames(): string[] {
    return this.forms?.map(form => form.name) || [];
  }

  getMoveNames(): string[] {
    return this.moves?.map(move => move.move.name) || [];
  }

  getMovesLearnedAtLevel(level: number): string[] {
    return this.moves?.filter(move =>
      move.version_group_details.some(detail => detail.level_learned_at === level)
    ).map(move => move.move.name) || [];
  }

  getHeldItemNames(): string[] {
    return this.held_items?.map(item => item.name) || [];
  }

  isDefaultForm(): boolean {
    return this.is_default;
  }

  getSpeciesName(): string | null {
    return this.species?.name || null;
  }

  getSpeciesUrl(): string | null {
    return this.species?.url || null;
  }

  getGameIndices(): { game_index: number; version: string }[] {
    return this.game_indices?.map(gi => ({
      game_index: gi.game_index,
      version: gi.version.name
    })) || [];
  }

  getHiddenAbilities(): string[] {
    return this.abilities?.filter(ability => ability.is_hidden)
      .map(ability => ability.ability.name) || [];
  }

  getVisibleAbilities(): string[] {
    return this.abilities?.filter(ability => !ability.is_hidden)
      .map(ability => ability.ability.name) || [];
  }
}
