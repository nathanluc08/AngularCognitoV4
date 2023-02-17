import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphDBSizeComponent } from './graph-dbsize.component';

describe('GraphDBSizeComponent', () => {
  let component: GraphDBSizeComponent;
  let fixture: ComponentFixture<GraphDBSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphDBSizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphDBSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
