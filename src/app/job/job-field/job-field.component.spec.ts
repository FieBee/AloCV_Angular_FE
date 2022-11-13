import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobFieldComponent } from './job-field.component';

describe('JobFieldComponent', () => {
  let component: JobFieldComponent;
  let fixture: ComponentFixture<JobFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
