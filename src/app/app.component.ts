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
    this.viewer.onEnterMarkupMode.subscribe(() => {
      this.bottomPanelOpened = true;
    });
  }
  title = 'viewerPT';

  faCaretLeft = faCaretLeft;
  faCaretRight = faCaretRight;
  faCaretDown = faCaretDown;
  faCaretUp = faCaretUp;
  leftPanelOpened = true;
  topPanelOpened = true;
  bottomPanelOpened = true;
  disableAnimate = true;
  topPanelHeight = "135px";
  markupMode = false;
  toggleLeftPane() {
    this.leftPanelOpened = !this.leftPanelOpened;
  }

  toggleTopPane() {
    this.topPanelOpened = !this.topPanelOpened;
    if (!this.topPanelOpened) {
      this.topPanelHeight = "135px";
      this.viewer.thumbNailResize("117px");
    }
  }

  toggleBottomPane() {
    this.bottomPanelOpened = !this.bottomPanelOpened;
  }

  onResizeEnd(event) {
      this.topPanelHeight = event.rectangle.bottom + "px";
  }

  onResizing(event) {
      this.topPanelHeight = event.rectangle.bottom + "px";
      this.viewer.thumbNailResize((event.rectangle.bottom - 18) + "px")
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
