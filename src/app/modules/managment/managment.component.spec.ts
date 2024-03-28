import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagmentComponent } from './managment.component';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TabMenuModule } from 'primeng/tabmenu';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { TableComponent } from '../shared/table/table.component';

describe('ManagmentComponent', () => {
  let component: ManagmentComponent;
  let fixture: ComponentFixture<ManagmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagmentComponent, TableComponent],
      imports: [TableModule, ToastModule, ConfirmDialogModule, TabMenuModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 123 }),
          },
        },
      ],
    });
    fixture = TestBed.createComponent(ManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
