import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-top-panel',
  templateUrl: './top-panel.component.html',
  styleUrls: ['./top-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
