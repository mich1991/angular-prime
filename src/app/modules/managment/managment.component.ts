import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import {
  orderColumnsData,
  orderData,
  productColumnsData,
  productData,
  userColumnsData,
  userData,
} from '../mocks/tableData';
import { Table, tableColumn } from './models/table';
import {
  ConfirmEventType,
  ConfirmationService,
  MessageService,
} from 'primeng/api';

export interface ITableIdentifier {
  tableType: 'user' | 'product' | 'order';
  tabTitle: 'Home' | 'Calendar' | 'Edit' | 'Documentation' | 'Settings';
}

@Component({
  selector: 'app-managment',
  templateUrl: './managment.component.html',
  styleUrls: ['./managment.component.scss'],
  providers: [ConfirmationService, MessageService],
})
export class ManagmentComponent implements OnInit {
  isLoading: boolean = false;
  currentTab: MenuItem = { label: 'Home', icon: 'pi pi-fw pi-home' };
  userTable: Table = userData;
  userColumns: tableColumn[] = [];
  productTable: Table = [];
  productColumns: tableColumn[] = [];
  orderTable: Table = [];
  orderColumns: tableColumn[] = [];

  tableIdentifiers: ITableIdentifier[] = [
    { tableType: 'user', tabTitle: 'Home' },
    { tableType: 'product', tabTitle: 'Calendar' },
    { tableType: 'order', tabTitle: 'Edit' },
  ];

  items: MenuItem[] = [
    { label: 'Home', icon: 'pi pi-fw pi-home' },
    { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
    { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
    { label: 'Documentation', icon: 'pi pi-fw pi-file' },
    { label: 'Settings', icon: 'pi pi-fw pi-cog' },
  ];
  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.userColumns = userColumnsData;
    this.productColumns = productColumnsData;
    this.orderColumns = orderColumnsData;
    this.getTableData('user');
  }

  tabChangeHandler(event: any) {
    this.currentTab = event;
    let table: 'user' | 'product' | 'order' = 'user';
    switch (event.label) {
      case 'Home':
        table = 'user';
        break;
      case 'Calendar':
        table = 'product';
        break;
      case 'Edit':
        table = 'order';
        break;
    }
    this.getTableData(table);
  }

  getTableData(tableType: 'user' | 'product' | 'order') {
    // that's ugly as hell, but it's just for the example, don't do this in production
    if (tableType === 'user' && this.userTable.length > 0) {
      return;
    }
    if (tableType === 'product' && this.productTable.length > 0) {
      return;
    }
    if (tableType === 'order' && this.orderTable.length > 0) {
      return;
    }
    this.isLoading = true;
    setTimeout(() => {
      switch (tableType) {
        case 'user':
          this.userTable = userData;
          break;
        case 'product':
          this.productTable = productData;
          break;
        case 'order':
          this.orderTable = orderData;
          break;
      }
      this.isLoading = false;
    }, 500);
  }

  modalTest() {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'Record deleted',
        });
      },
      reject: (type: ConfirmEventType) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({
              severity: 'error',
              summary: 'Rejected',
              detail: 'You have rejected',
            });
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({
              severity: 'warn',
              summary: 'Cancelled',
              detail: 'You have cancelled',
            });
            break;
        }
      },
    });
  }
}
