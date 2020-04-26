import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { TopPanelComponent } from './top-panel/top-panel.component';
import { RightPanelComponent } from './right-panel/right-panel.component';
import { BottomPanelComponent } from './bottom-panel/bottom-panel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PanelMenuModule} from 'primeng/panelmenu';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [LeftPanelComponent, TopPanelComponent, RightPanelComponent, BottomPanelComponent, FooterComponent],
  imports: [
    CommonModule, FontAwesomeModule, BrowserAnimationsModule, PanelMenuModule, SharedComponentsModule,
  ],
  exports: [LeftPanelComponent, TopPanelComponent, RightPanelComponent, BottomPanelComponent, FooterComponent]
})
export class PanelsModule { }
