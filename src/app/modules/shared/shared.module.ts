import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddHcpcpsDialogComponent } from './add-hcpcps-dialog/add-hcpcps-dialog.component';
import { TableComponent } from './table/table.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [AddHcpcpsDialogComponent, TableComponent],
  imports: [
    CommonModule,
    DynamicDialogModule,
    ButtonModule,
    DynamicDialogModule,
    ReactiveFormsModule,
    TableModule,
    InputTextModule,
  ],
  exports: [AddHcpcpsDialogComponent, TableComponent],
})
export class SharedModule {}
