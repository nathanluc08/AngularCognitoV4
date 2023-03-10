import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PieDbbackupGoogleCharts } from './pie-dbbackup-GoogleCharts';

describe('PieDBBackupGoogleChartsComponent', () => {
  let component: PieDbbackupGoogleCharts;
  let fixture: ComponentFixture<PieDbbackupGoogleCharts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieDbbackupGoogleCharts ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieDbbackupGoogleCharts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
