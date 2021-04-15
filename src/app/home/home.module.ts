import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CallServiceComponent } from './call-service/call-service.component';
import { SendPayRequestComponent } from './send-pay-request/send-pay-request.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [HomePage, CallServiceComponent, SendPayRequestComponent],
})
export class HomePageModule {}
