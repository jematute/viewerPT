import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ViewerService } from 'src/app/viewer/viewer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {

  constructor(public viewer: ViewerService) { }

  ngOnInit(): void {
  }

}
