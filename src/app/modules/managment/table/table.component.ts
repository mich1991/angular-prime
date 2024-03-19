import { Component, Input, OnInit } from '@angular/core';
import { Table, tableColumn } from '../models/table';

@Component({
  selector: 'mng-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() tableData: Table = [];
  @Input() tableType: 'user' | 'product' | 'order' = 'user';
  @Input() tableColumns: tableColumn[] = [];
  @Input() isLoading: boolean = false;

  ngOnInit() {
    console.log(this.tableData);
  }
}
