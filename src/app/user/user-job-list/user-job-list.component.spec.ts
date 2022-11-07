import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserJobListComponent } from './user-job-list.component';

describe('UserJobListComponent', () => {
  let component: UserJobListComponent;
  let fixture: ComponentFixture<UserJobListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserJobListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserJobListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
