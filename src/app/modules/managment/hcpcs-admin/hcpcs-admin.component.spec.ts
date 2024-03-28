import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HcpcsAdminComponent } from './hcpcs-admin.component';

describe('HcpcsAdminComponent', () => {
  let component: HcpcsAdminComponent;
  let fixture: ComponentFixture<HcpcsAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HcpcsAdminComponent]
    });
    fixture = TestBed.createComponent(HcpcsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
