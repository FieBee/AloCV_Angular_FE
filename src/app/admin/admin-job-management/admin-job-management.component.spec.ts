import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminJobManagementComponent } from './admin-job-management.component';

describe('AdminJobManagementComponent', () => {
  let component: AdminJobManagementComponent;
  let fixture: ComponentFixture<AdminJobManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminJobManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminJobManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
