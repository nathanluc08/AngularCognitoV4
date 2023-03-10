import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PieDbGoogleChartsComponent } from './pie-db-GoogleCharts.component';

describe('PieDBGoogleChartsComponent', () => {
  let component: PieDbGoogleChartsComponent;
  let fixture: ComponentFixture<PieDbGoogleChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieDbGoogleChartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieDbGoogleChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
