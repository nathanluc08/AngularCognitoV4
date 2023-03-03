import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphDBSize2Component } from './graph-dbsize2.component';

describe('GraphDBSize2Component', () => {
  let component: GraphDBSize2Component;
  let fixture: ComponentFixture<GraphDBSize2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphDBSize2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphDBSize2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
