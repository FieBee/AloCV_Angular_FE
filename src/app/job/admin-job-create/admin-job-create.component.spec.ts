import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminJobCreateComponent } from './admin-job-create.component';

describe('AdminJobCreateComponent', () => {
  let component: AdminJobCreateComponent;
  let fixture: ComponentFixture<AdminJobCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminJobCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminJobCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
