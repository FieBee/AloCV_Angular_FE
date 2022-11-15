import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAccountManagementComponent } from './user-account-management.component';

describe('UserAccountManagementComponent', () => {
  let component: UserAccountManagementComponent;
  let fixture: ComponentFixture<UserAccountManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAccountManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAccountManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
