import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHcpcpsDialogComponent } from './add-hcpcps-dialog.component';

describe('AddHcpcpsDialogComponent', () => {
  let component: AddHcpcpsDialogComponent;
  let fixture: ComponentFixture<AddHcpcpsDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddHcpcpsDialogComponent]
    });
    fixture = TestBed.createComponent(AddHcpcpsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
