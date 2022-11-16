import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySuggestListComponent } from './company-suggest-list.component';

describe('CompanySuggestListComponent', () => {
  let component: CompanySuggestListComponent;
  let fixture: ComponentFixture<CompanySuggestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanySuggestListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanySuggestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
