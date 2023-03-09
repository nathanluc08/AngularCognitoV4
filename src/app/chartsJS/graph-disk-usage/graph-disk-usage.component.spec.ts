import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphDiskUsageComponent } from './graph-disk-usage.component';

describe('GraphDiskUsageComponent', () => {
  let component: GraphDiskUsageComponent;
  let fixture: ComponentFixture<GraphDiskUsageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphDiskUsageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphDiskUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
