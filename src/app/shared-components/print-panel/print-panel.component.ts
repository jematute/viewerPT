import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
@Component({
  templateUrl: './print-panel.component.html',
  styleUrls: ['./print-panel.component.scss']
})
export class PrintPanelComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<PrintPanelComponent>) { }

  ngOnInit(): void {
    this.docImage = `assets/images/${this.data.doc.image}`;
  }

  docImage = '';



  selected = {value: 'current', viewValue: 'Current Page'};

  items: Item[] = [
    {value: 'Current Page', viewValue: 'current'},
    {value: 'First Page', viewValue: 'first'},
    {value: 'All Pages', viewValue: 'all'}
  ];

  close() {
    this.dialogRef.close();
  }
}



interface Item {
  value: string;
  viewValue: string;
}
