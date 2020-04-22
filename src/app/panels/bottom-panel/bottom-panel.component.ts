import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-bottom-panel',
  templateUrl: './bottom-panel.component.html',
  styleUrls: ['./bottom-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BottomPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
