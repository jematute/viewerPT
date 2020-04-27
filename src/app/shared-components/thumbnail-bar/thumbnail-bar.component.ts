import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ViewerService } from 'src/app/viewer/viewer.service';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { collapseAnimation, rubberBandAnimation, fadeInUpOnEnterAnimation, bounceOutDownOnLeaveAnimation, bounceInUpOnEnterAnimation, bounceInDownOnEnterAnimation, fadeOutDownOnLeaveAnimation, zoomOutDownOnLeaveAnimation, zoomInUpOnEnterAnimation } from 'angular-animations'

@Component({
  selector: 'app-thumbnail-bar',
  templateUrl: './thumbnail-bar.component.html',
  styleUrls: ['./thumbnail-bar.component.scss'],
  animations: [
    zoomOutDownOnLeaveAnimation(),
    zoomInUpOnEnterAnimation()
  ]
})
export class ThumbnailBarComponent implements OnInit {

  constructor(public viewer: ViewerService, private cd: ChangeDetectorRef) { }

  openedDocuments = [];

  ngOnInit(): void {
    this.openedDocuments = this.viewer.openedDocuments;
    this.viewer.onFileOpened.subscribe(() => {
      this.openedDocuments = this.viewer.openedDocuments;
      this.cd.detectChanges();
    });
    
  }

  faTimesCircle = faTimesCircle;

  onImageClicked(item) {
    this.viewer.openDocument(item);
  }

  onCloseButtonClicked(item) {
    this.viewer.closeDocument(item);
  }

  baseUrl = 'assets/images/';



  zoomValue = 1;
}
