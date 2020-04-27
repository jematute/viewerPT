import { Component, OnInit } from '@angular/core';
import { ViewerService } from '../viewer/viewer.service';
import { bounceInUpOnEnterAnimation, bounceOutDownOnLeaveAnimation, bounceOutUpOnLeaveAnimation, fadeInUpAnimation, fadeOutUpAnimation, fadeInUpOnEnterAnimation, fadeOutUpOnLeaveAnimation, fadeInDownOnEnterAnimation, fadeOutDownOnLeaveAnimation, zoomInOnEnterAnimation, zoomOutOnLeaveAnimation } from 'angular-animations';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    zoomInOnEnterAnimation(),
    zoomOutOnLeaveAnimation(),
    fadeInDownOnEnterAnimation({ anchor: 'enter', duration: 100, delay: 0, translate: '40px' }),
    fadeOutUpOnLeaveAnimation({ anchor: 'leave', duration: 100, delay: 200, translate: '40px' })
  ]

})
export class MainComponent implements OnInit {

  constructor(public viewer: ViewerService) { }

  ngOnInit(): void {
    
  }

  navigationItems = [{
    label: "Split Window",
  }, {
    label: "Un-Split Window"
  }, {
    label: "separator"
  }, {
    label: "Full Page"
  }, {
    label: "Scroll Page"
  }, {
    label: "separator"
  }, {
    label: "Select Tool"
  }, {
    label: "Zoom Tool"
  }, {
    label: "Panel"
  }, {
    label: "Fit"
  }, {
    label: "separator"
  }, {
    label: "Prev's View"
  }, {
    label: "Next View"
  },]

}
