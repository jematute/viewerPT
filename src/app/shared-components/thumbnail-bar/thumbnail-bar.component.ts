import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ViewerService } from 'src/app/viewer/viewer.service';

@Component({
  selector: 'app-thumbnail-bar',
  templateUrl: './thumbnail-bar.component.html',
  styleUrls: ['./thumbnail-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ThumbnailBarComponent implements OnInit {

  constructor(public viewer: ViewerService) { }

  ngOnInit(): void {
    
  }

  baseUrl = 'assets/images/';


  zoomValue = 1;
}
