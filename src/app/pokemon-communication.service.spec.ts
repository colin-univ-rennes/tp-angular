import { TestBed } from '@angular/core/testing';

import { PokemonCommunicationService } from './pokemon-communication.service';

describe('PokemonCommunicationService', () => {
  let service: PokemonCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have initial pokemon ID as null', () => {
    expect(service.getPokemonId()).toBeNull();
  });

  it('should set pokemon ID', () => {
    const testId = 25;
    service.setPokemonId(testId);
    expect(service.getPokemonId()).toBe(testId);
  });

  it('should set pokemon ID to null', () => {
    service.setPokemonId(25);
    service.setPokemonId(null);
    expect(service.getPokemonId()).toBeNull();
  });

  it('should emit pokemon ID changes through observable', () => {
    const testIds = [1, 25, 150, null];
    const emittedValues: (number | null)[] = [];

    service.pokemonId$.subscribe(id => {
      emittedValues.push(id);
    });

    // The first emission should be null (initial value)
    expect(emittedValues).toEqual([null]);

    // Test each ID change
    testIds.forEach(id => {
      service.setPokemonId(id);
    });

    expect(emittedValues).toEqual([null, ...testIds]);
  });

  it('should update pokemon ID multiple times', () => {
    service.setPokemonId(1);
    expect(service.getPokemonId()).toBe(1);

    service.setPokemonId(150);
    expect(service.getPokemonId()).toBe(150);

    service.setPokemonId(null);
    expect(service.getPokemonId()).toBeNull();
  });
});
