import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedbackPageRoutingModule } from './feedback-routing.module';

import { FeedbackPage } from './feedback.page';
import { QuestionCardComponent } from './question-card/question-card.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, FeedbackPageRoutingModule],
  declarations: [FeedbackPage, QuestionCardComponent],
})
export class FeedbackPageModule {}
