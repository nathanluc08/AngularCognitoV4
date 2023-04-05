import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDatabasesComponent } from './table-databases.component';

describe('TableDataBasesComponent', () => {
  let component: TableDatabasesComponent;
  let fixture: ComponentFixture<TableDatabasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableDatabasesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableDatabasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
