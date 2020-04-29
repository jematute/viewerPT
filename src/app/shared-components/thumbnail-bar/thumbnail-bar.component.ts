import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Input, OnDestroy, ApplicationRef } from '@angular/core';
import { ViewerService } from 'src/app/viewer/viewer.service';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { collapseAnimation, rubberBandAnimation, fadeInUpOnEnterAnimation, bounceOutDownOnLeaveAnimation, bounceInUpOnEnterAnimation, bounceInDownOnEnterAnimation, fadeOutDownOnLeaveAnimation, zoomOutDownOnLeaveAnimation, zoomInUpOnEnterAnimation } from 'angular-animations'
import { listAnimation } from 'src/app/animations';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-thumbnail-bar',
  templateUrl: './thumbnail-bar.component.html',
  styleUrls: ['./thumbnail-bar.component.scss'],
  animations: [
    zoomOutDownOnLeaveAnimation({ delay: 250 }),
    zoomInUpOnEnterAnimation({ delay: 300}),
  ]
})
export class ThumbnailBarComponent implements OnInit, OnDestroy {

  constructor(public viewer: ViewerService) { }
  ngOnDestroy(): void {
    this.thumbnailResizeSubscription.unsubscribe();

  }

  openedDocuments = [];
  thumbnailResizeSubscription: Subscription;

  ngOnInit(): void {
    this.openedDocuments = this.viewer.openedDocuments;
    this.viewer.onFileOpened.subscribe(() => {
      this.openedDocuments = this.viewer.openedDocuments;
    });
    

    this.thumbnailResizeSubscription = this.viewer.onThumbnailResize.subscribe(newSize => {
      this.thumbnailSize = newSize;
      console.log(newSize);
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

  @Input()
  thumbnailSize = "117px";

  zoomValue = 1;
}
