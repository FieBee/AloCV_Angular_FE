import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSuggestComponent } from './job-suggest.component';

describe('JobSuggestComponent', () => {
  let component: JobSuggestComponent;
  let fixture: ComponentFixture<JobSuggestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobSuggestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobSuggestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
