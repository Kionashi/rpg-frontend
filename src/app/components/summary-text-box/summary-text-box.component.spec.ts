import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryTextBoxComponent } from './summary-text-box.component';

describe('SummaryTextBoxComponent', () => {
  let component: SummaryTextBoxComponent;
  let fixture: ComponentFixture<SummaryTextBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SummaryTextBoxComponent]
    });
    fixture = TestBed.createComponent(SummaryTextBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
