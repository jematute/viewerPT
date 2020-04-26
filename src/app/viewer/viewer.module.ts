import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Viewer2dComponent } from './viewer2d/viewer2d.component';



@NgModule({
  declarations: [Viewer2dComponent],
  imports: [
    CommonModule
  ],
  exports: [Viewer2dComponent]
})
export class ViewerModule { }
