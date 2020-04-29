import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, HostBinding, ViewChild } from '@angular/core';
import { faGripVertical, faCaretRight, faCaretLeft, faCaretUp, faCaretDown, faGripHorizontal } from '@fortawesome/free-solid-svg-icons';
import { slideInSide, slideInTop } from 'src/app/animations';
import { slideInUpOnEnterAnimation, zoomInOnEnterAnimation, fadeInUpOnEnterAnimation, collapseAnimation, slideInRightAnimation, slideInLeftAnimation, slideInRightOnEnterAnimation, expandOnEnterAnimation, rollInOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-floating-toolbar',
  templateUrl: './floating-toolbar.component.html',
  styleUrls: ['./floating-toolbar.component.scss'],
  animations: [
    slideInTop, slideInSide
  ]
})
export class FloatingToolbarComponent implements OnInit {

  constructor() { }

  @ViewChild('myHandle') myHandle; 

  ngOnInit(): void {
    this.toolTipPosition = this.orientation == "vertical" ? "left" : "bottom";
  }

  faGripVertical = faGripVertical;
  faGripHorizontal = faGripHorizontal;
  faCaretRight = faCaretRight;
  faCaretLeft = faCaretLeft;
  faCaretUp = faCaretUp;
  faCaretDown = faCaretDown;
  toolTipPosition = "left";
  collapsed = false;

  toggleBar() {
    this.collapsed = !this.collapsed;
  }

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
    alert();
    if (item.label !== 'separator') {
      this.onButtonClicked.emit(item);
    }
  }


}
