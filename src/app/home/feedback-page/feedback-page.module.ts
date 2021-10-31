import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedbackPagePageRoutingModule } from './feedback-page-routing.module';

import { FeedbackPagePage } from './feedback-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedbackPagePageRoutingModule
  ],
  declarations: [FeedbackPagePage]
})
export class FeedbackPagePageModule {}
