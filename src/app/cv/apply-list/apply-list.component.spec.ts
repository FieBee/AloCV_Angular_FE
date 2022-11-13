import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyListComponent } from './apply-list.component';

describe('ApplyListComponent', () => {
  let component: ApplyListComponent;
  let fixture: ComponentFixture<ApplyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
