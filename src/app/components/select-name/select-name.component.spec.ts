import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectNameComponent } from './select-name.component';

describe('SelectNameComponent', () => {
  let component: SelectNameComponent;
  let fixture: ComponentFixture<SelectNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectNameComponent]
    });
    fixture = TestBed.createComponent(SelectNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
