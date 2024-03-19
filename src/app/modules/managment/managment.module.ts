import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagmentRoutingModule } from './managment-routing.module';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { ManagmentComponent } from './managment.component';
import { TableComponent } from './table/table.component';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [ManagmentComponent, TableComponent],
  imports: [
    CommonModule,
    ManagmentRoutingModule,
    TabMenuModule,
    TableModule,
    ButtonModule,
    ConfirmDialogModule,
    ToastModule,
  ],
})
export class ManagmentModule {}
