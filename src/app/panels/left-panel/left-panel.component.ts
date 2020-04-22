import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { faHome, faSearchPlus } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeftPanelComponent implements OnInit {

  constructor() { }

  faHome = faHome;
  faSearchPlus = faSearchPlus;

  buttons = new Array<any>();

  ngOnInit(): void {

    const buttons = [{
      icon: faHome
    }, {
      icon: faSearchPlus
    }]


    this.buttons = buttons;
  }

}
