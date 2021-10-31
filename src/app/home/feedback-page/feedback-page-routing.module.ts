import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedbackPagePage } from './feedback-page.page';

const routes: Routes = [
  {
    path: '',
    component: FeedbackPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedbackPagePageRoutingModule {}
