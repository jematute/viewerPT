import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { TopPanelComponent } from './top-panel/top-panel.component';
import { RightPanelComponent } from './right-panel/right-panel.component';
import { BottomPanelComponent } from './bottom-panel/bottom-panel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [LeftPanelComponent, TopPanelComponent, RightPanelComponent, BottomPanelComponent],
  imports: [
    CommonModule, FontAwesomeModule
  ],
  exports: [LeftPanelComponent, TopPanelComponent, RightPanelComponent, BottomPanelComponent]
})
export class PanelsModule { }
