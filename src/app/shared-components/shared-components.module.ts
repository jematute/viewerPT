import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelMenuComponent } from './panel-menu/panel-menu.component';
import { PanelButtonComponent } from './panel-menu/panel-button/panel-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ThumbnailBarComponent } from './thumbnail-bar/thumbnail-bar.component';
import {SliderModule} from 'primeng/slider';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FloatingToolbarComponent } from './floating-toolbar/floating-toolbar.component';

@NgModule({
  declarations: [PanelMenuComponent, PanelButtonComponent, ThumbnailBarComponent, FloatingToolbarComponent],
  imports: [
    CommonModule, FontAwesomeModule, SliderModule, FormsModule, BrowserAnimationsModule
  ],
  exports: [PanelMenuComponent, ThumbnailBarComponent, FloatingToolbarComponent]
})
export class SharedComponentsModule { }
