import { Component, OnInit } from '@angular/core';
import { Table, tableColumn } from '../models/table';
import { userColumnsData, userData } from '../../mocks/tableData';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddHcpcpsDialogComponent } from '../../shared/add-hcpcps-dialog/add-hcpcps-dialog.component';

@Component({
  selector: 'app-hcpcs-admin',
  templateUrl: './hcpcs-admin.component.html',
  styleUrls: ['./hcpcs-admin.component.scss'],
  providers: [MessageService, DialogService],
})
export class HcpcsAdminComponent implements OnInit {
  userTable: Table = userData;
  userColumns: tableColumn[] = [];
  isLoading: boolean = false;
  ref: DynamicDialogRef | undefined;

  constructor(
    public dialogService: DialogService,
    public messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.userColumns = userColumnsData;
  }

  addHCPCS() {
    this.ref = this.dialogService.open(AddHcpcpsDialogComponent, {
      data: {
        name: 'Omg this is a test',
        ref: this.ref,
      },
      header: 'Add HCPCS',
      width: '50vw',
      contentStyle: { overflow: 'auto' },
    });

    this.ref.onClose.subscribe((data: any) => {
      if (data) {
        console.log(data);
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'HCPCS Added',
          life: 3000,
        });
      }
    });
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }
}
