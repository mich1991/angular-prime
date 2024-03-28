import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagmentRoutingModule } from './managment-routing.module';
import { TabMenuModule } from 'primeng/tabmenu';
import { ManagmentComponent } from './managment.component';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { HcpcsAdminComponent } from './hcpcs-admin/hcpcs-admin.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ManagmentComponent, HcpcsAdminComponent],
  imports: [
    CommonModule,
    ManagmentRoutingModule,
    TabMenuModule,
    ButtonModule,
    ConfirmDialogModule,
    ToastModule,
    DynamicDialogModule,
    SharedModule,
    ToastModule,
  ],
})
export class ManagmentModule {}
