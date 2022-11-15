import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySuggestComponent } from './company-suggest.component';

describe('CompanySuggestComponent', () => {
  let component: CompanySuggestComponent;
  let fixture: ComponentFixture<CompanySuggestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanySuggestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanySuggestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
