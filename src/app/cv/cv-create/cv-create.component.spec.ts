import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvCreateComponent } from './cv-create.component';

describe('CvCreateComponent', () => {
  let component: CvCreateComponent;
  let fixture: ComponentFixture<CvCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
