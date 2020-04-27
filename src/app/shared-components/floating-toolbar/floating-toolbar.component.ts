import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, HostBinding } from '@angular/core';

@Component({
  selector: 'app-floating-toolbar',
  templateUrl: './floating-toolbar.component.html',
  styleUrls: ['./floating-toolbar.component.scss'],
})
export class FloatingToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.toolTipPosition = this.orientation == "vertical" ? "left" : "bottom";
  }

  toolTipPosition = "left";

  @Input()
  menuItems = [];

  @Input()
  orientation = 'horizontal';

  @Output()
  onButtonClicked = new EventEmitter<any>();

  @Input()
  @HostBinding('style.top')
  top = "0px"

  @Input()
  @HostBinding('style.right')
  right = "100px";

  buttonClicked(item) {
    if (item.label !== 'separator') {
      this.onButtonClicked.emit(item);
    }
  }

}
