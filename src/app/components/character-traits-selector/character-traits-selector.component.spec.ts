import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterTraitsSelectorComponent } from './character-traits-selector.component';

describe('CharacterTraitsSelectorComponent', () => {
  let component: CharacterTraitsSelectorComponent;
  let fixture: ComponentFixture<CharacterTraitsSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterTraitsSelectorComponent]
    });
    fixture = TestBed.createComponent(CharacterTraitsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
