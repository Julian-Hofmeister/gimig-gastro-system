import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'reservation-page',
    loadChildren: () => import('./reservation-page/reservation-page.module').then( m => m.ReservationPagePageModule)
  },
  {
    path: 'feedback-page',
    loadChildren: () => import('./feedback-page/feedback-page.module').then( m => m.FeedbackPagePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
