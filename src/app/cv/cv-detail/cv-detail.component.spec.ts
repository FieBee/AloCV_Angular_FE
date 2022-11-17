import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvDetailComponent } from './cv-detail.component';

describe('CvDetailComponent', () => {
  let component: CvDetailComponent;
  let fixture: ComponentFixture<CvDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
