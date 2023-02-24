import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieDbserverGoogleChartsComponent } from './pie-dbserver-GoogleCharts.component';

describe('PieDBServerGoogleChartsComponent', () => {
  let component: PieDbserverGoogleChartsComponent;
  let fixture: ComponentFixture<PieDbserverGoogleChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieDbserverGoogleChartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieDbserverGoogleChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
