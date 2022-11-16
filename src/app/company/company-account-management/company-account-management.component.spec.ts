import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyAccountManagementComponent } from './company-account-management.component';

describe('CompanyAccountManagementComponent', () => {
  let component: CompanyAccountManagementComponent;
  let fixture: ComponentFixture<CompanyAccountManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyAccountManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyAccountManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
