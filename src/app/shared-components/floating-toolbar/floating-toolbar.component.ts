import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-floating-toolbar',
  templateUrl: './floating-toolbar.component.html',
  styleUrls: ['./floating-toolbar.component.scss'],
})
export class FloatingToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  menuItems = [];

}