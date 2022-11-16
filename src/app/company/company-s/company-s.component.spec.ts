import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySComponent } from './company-s.component';

describe('CompanySComponent', () => {
  let component: CompanySComponent;
  let fixture: ComponentFixture<CompanySComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanySComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanySComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
