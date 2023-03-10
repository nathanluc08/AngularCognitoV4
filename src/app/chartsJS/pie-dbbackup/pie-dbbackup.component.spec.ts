import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PieDBBackupComponent } from './pie-dbbackup.component';

describe('PieDBBackupComponent', () => {
  let component: PieDBBackupComponent;
  let fixture: ComponentFixture<PieDBBackupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieDBBackupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieDBBackupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
