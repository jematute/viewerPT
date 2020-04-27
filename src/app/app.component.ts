import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, group, animate, animation } from '@angular/animations';
import { faCaretLeft, faCaretRight, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { SidebarModule } from 'ng-sidebar';
import { slideInSide, slideInTop } from './animations';
import { ResizeEvent } from 'angular-resizable-element';
import { ViewerService } from './viewer/viewer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInSide,
    slideInTop
  ]
})
export class AppComponent implements OnInit {

  constructor(public viewer: ViewerService) {

  }

  ngOnInit(): void {
    setTimeout(() => {
      this.disableAnimate = false;
    });
    this.viewer.onFileClosed.subscribe(() => {
      if (this.viewer.openedDocuments.length === 0)
        this.topPanelOpened = false;
    });
  }
  title = 'viewerPT';

  faCaretLeft = faCaretLeft;
  faCaretRight = faCaretRight;
  faCaretDown = faCaretDown;
  faCaretUp = faCaretUp;
  leftPanelOpened = true;
  topPanelOpened = false;
  disableAnimate = true;
  topPanelHeight = "135px";
  toggleLeftPane() {
    this.leftPanelOpened = !this.leftPanelOpened;
  }

  toggleTopPane() {
    this.topPanelOpened = !this.topPanelOpened;
  }

  onResizeEnd(event) {
      this.topPanelHeight = event.rectangle.bottom + "px";
  }

  onResizing(event) {
      this.topPanelHeight = event.rectangle.bottom + "px";
  }

  validate(event: ResizeEvent): boolean {
    const MIN_DIMENSIONS_PX: number = 83;
    if (
      event.rectangle.width &&
      event.rectangle.height &&
      (event.rectangle.width < MIN_DIMENSIONS_PX ||
        event.rectangle.height < MIN_DIMENSIONS_PX)
    ) {
      return false;
    }
    return true;
  }
}
