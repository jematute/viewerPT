import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-panel-menu',
  templateUrl: './panel-menu.component.html',
  styleUrls: ['./panel-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PanelMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  @Output()
  onClick = new EventEmitter<any>();

  @Input()
  model: MenuItem[];

}
