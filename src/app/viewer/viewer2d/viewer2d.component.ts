import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-viewer2d',
  templateUrl: './viewer2d.component.html',
  styleUrls: ['./viewer2d.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Viewer2dComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
