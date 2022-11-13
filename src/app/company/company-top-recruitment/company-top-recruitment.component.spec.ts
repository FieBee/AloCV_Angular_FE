import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyTopRecruitmentComponent } from './company-top-recruitment.component';

describe('CompanyTopRecruitmentComponent', () => {
  let component: CompanyTopRecruitmentComponent;
  let fixture: ComponentFixture<CompanyTopRecruitmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyTopRecruitmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyTopRecruitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
