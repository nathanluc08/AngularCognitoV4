import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableServerComponent } from './table-server.component';

describe('TableServerComponent', () => {
  let component: TableServerComponent;
  let fixture: ComponentFixture<TableServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableServerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
