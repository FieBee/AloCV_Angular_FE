import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSuggestedComponent } from './job-suggested.component';

describe('JobSuggestedComponent', () => {
  let component: JobSuggestedComponent;
  let fixture: ComponentFixture<JobSuggestedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobSuggestedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobSuggestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
