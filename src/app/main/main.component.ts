import { Component, OnInit } from '@angular/core';
import { ViewerService } from '../viewer/viewer.service';
import { bounceInUpOnEnterAnimation, bounceOutDownOnLeaveAnimation, bounceOutUpOnLeaveAnimation, fadeInUpAnimation, fadeOutUpAnimation, fadeInUpOnEnterAnimation, fadeOutUpOnLeaveAnimation, fadeInDownOnEnterAnimation, fadeOutDownOnLeaveAnimation, zoomInOnEnterAnimation, zoomOutOnLeaveAnimation } from 'angular-animations';
import { faMousePointer, faFont, faComment, faCloud, faStickyNote, faShapes, faPencilRuler, faHighlighter, faDrawPolygon, faImage, faEraser, faWindowRestore, faWindowMaximize, faDesktop, faScroll, faSearchPlus, faColumns, faCompress, faBackward, faForward } from '@fortawesome/free-solid-svg-icons';

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
    icon: faWindowRestore
  }, {
    label: "Un-Split Window",
    icon: faWindowMaximize
  }, {
    label: "separator"
  }, {
    label: "Full Page",
    icon: faDesktop
  }, {
    label: "Scroll Page",
    icon: faScroll
  }, {
    label: "separator",
  }, {
    label: "Select Tool",
    icon: faMousePointer
  }, {
    label: "Zoom Tool",
    icon: faSearchPlus
  }, {
    label: "Panel",
    icon: faColumns
  }, {
    label: "Fit",
    icon: faCompress
  }, {
    label: "separator"
  }, {
    label: "Prev's View",
    icon: faBackward
  }, {
    label: "Next View",
    icon: faForward
  },]


  selectionItems = [{
    label: "Select Arrow",
    icon: faMousePointer
  }, {
    label: "Text Box",
    icon: faFont
  }, {
    label: "Text Callout",
    icon: faComment
  }, {
    label: "Cloud Callout",
    icon: faCloud
  }, {
    label: "Sticky Note",
    icon: faStickyNote
  }, {
    label: "Rectangle",
    icon: faShapes
  }, {
    label: "Line",
    icon: faPencilRuler
  }, {
    label: "Highlight",
    icon: faHighlighter
  }, {
    label: "Dimension",
    icon: faDrawPolygon
  }, {
    label: "Image",
    icon: faImage
  }, {
    label: "Eraser",
    icon: faEraser
  }]

}
