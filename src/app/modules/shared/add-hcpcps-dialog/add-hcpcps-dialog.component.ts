import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-add-hcpcps-dialog',
  templateUrl: './add-hcpcps-dialog.component.html',
  styleUrls: ['./add-hcpcps-dialog.component.scss'],
})
export class AddHcpcpsDialogComponent {
  hcpcsForm = this.fb.group({
    name: ['', Validators.required],
    code: ['', Validators.required],
    description: ['', Validators.required],
  });

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private fb: FormBuilder
  ) {}

  submit() {
    this.ref.close(this.hcpcsForm.value);
  }
  close() {
    this.ref.destroy();
  }
}
