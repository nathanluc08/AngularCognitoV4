import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieServerComponent } from './pie-server.component';

describe('PieServerComponent', () => {
  let component: PieServerComponent;
  let fixture: ComponentFixture<PieServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieServerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
