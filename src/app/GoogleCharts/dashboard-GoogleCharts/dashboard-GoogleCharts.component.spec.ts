import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardGoogleChartsComponent } from './dashboard-GoogleCharts.component';

describe('DashboardGoogleChartsComponent', () => {
  let component: DashboardGoogleChartsComponent;
  let fixture: ComponentFixture<DashboardGoogleChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardGoogleChartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardGoogleChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
