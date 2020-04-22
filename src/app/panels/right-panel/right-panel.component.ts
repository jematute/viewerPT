import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RightPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
