import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieDBComponent } from './pie-db.component';

describe('PieDBComponent', () => {
  let component: PieDBComponent;
  let fixture: ComponentFixture<PieDBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieDBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
