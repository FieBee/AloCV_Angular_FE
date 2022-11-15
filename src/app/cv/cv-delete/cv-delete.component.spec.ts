import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvDeleteComponent } from './cv-delete.component';

describe('CvDeleteComponent', () => {
  let component: CvDeleteComponent;
  let fixture: ComponentFixture<CvDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
