import { Component, OnInit } from '@angular/core';
import { ViewerService } from '../viewer/viewer.service';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(public viewer: ViewerService) { }

  ngOnInit(): void {
    
  }

}
