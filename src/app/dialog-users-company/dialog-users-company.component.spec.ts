import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUsersCompanyComponent } from './dialog-users-company.component';

describe('EditDialogComponent', () => {
  let component: DialogUsersCompanyComponent;
  let fixture: ComponentFixture<DialogUsersCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogUsersCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogUsersCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
