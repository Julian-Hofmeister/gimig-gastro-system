import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservationPagePage } from './reservation-page.page';

const routes: Routes = [
  {
    path: '',
    component: ReservationPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservationPagePageRoutingModule {}
