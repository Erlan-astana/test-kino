import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClipComponent } from './clip.component';
import { MaterialModule } from '../../modules/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ClipComponent
  ],
  declarations: [
    ClipComponent
  ]
})
export class ClipModule { }
