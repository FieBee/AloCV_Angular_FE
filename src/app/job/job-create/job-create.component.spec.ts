import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobCreateComponent } from './job-create.component';

describe('AdminJobCreateComponent', () => {
  let component: JobCreateComponent;
  let fixture: ComponentFixture<JobCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
