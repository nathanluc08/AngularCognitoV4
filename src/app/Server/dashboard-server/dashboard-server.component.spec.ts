import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardServerComponent } from './dashboard-server.component';

describe('DashboardServerComponent', () => {
  let component: DashboardServerComponent;
  let fixture: ComponentFixture<DashboardServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardServerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
