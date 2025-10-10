import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffPokemon } from './aff-pokemon';

describe('AffPokemon', () => {
  let component: AffPokemon;
  let fixture: ComponentFixture<AffPokemon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AffPokemon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffPokemon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
