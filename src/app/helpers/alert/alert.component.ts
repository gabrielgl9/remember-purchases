import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  constructor(
    private modalRef: MatDialogRef<AlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  /**
   * Initialize Component
   *
   */
  ngOnInit() {}

  /**
   * Close the modal
   *
   */
  onNoClick(): void {
    this.modalRef.close();
  }
}
