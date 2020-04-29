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
import { AngularDraggableModule } from 'angular2-draggable';
import { MarkupPaneComponent } from './markup-pane/markup-pane.component';
import { AgGridModule } from 'ag-grid-angular';
import {TooltipModule} from 'primeng/tooltip';
import { MarkupToolbarComponent } from './markup-toolbar/markup-toolbar.component';
import { PrintPanelComponent } from './print-panel/print-panel.component';
import { MaterialModule } from '../material-module';

@NgModule({
  declarations: [PanelMenuComponent, PanelButtonComponent, ThumbnailBarComponent, FloatingToolbarComponent, MarkupPaneComponent, MarkupToolbarComponent, PrintPanelComponent],
  imports: [
    TooltipModule, MaterialModule, CommonModule, FontAwesomeModule, SliderModule, FormsModule, BrowserAnimationsModule, AngularDraggableModule, AgGridModule.withComponents([])
  ],
  entryComponents: [ PrintPanelComponent ],
  exports: [PanelMenuComponent, ThumbnailBarComponent, FloatingToolbarComponent, MarkupPaneComponent, MarkupToolbarComponent]
})
export class SharedComponentsModule { }
