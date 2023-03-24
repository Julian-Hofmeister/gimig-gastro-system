import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import {ImageModalComponent} from './image-modal.component';
@NgModule({
  declarations: [ImageModalComponent],
  imports: [CommonModule, IonicModule.forRoot()],
  exports: [ImageModalComponent],
})
export class ImageModalModule {}
