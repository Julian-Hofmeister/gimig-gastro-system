import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CallServiceComponent } from './call-service/call-service.component';
import { SendPayRequestComponent } from './send-pay-request/send-pay-request.component';
import { ReorderBeveragesModalComponent } from './reorder-beverages-modal/reorder-beverages-modal.component';
import { OfferDessertModalComponent } from './offer-dessert-modal/offer-dessert-modal.component';
import { ShowFeedbackModalComponent } from './show-feedback-modal/show-feedback-modal.component';
import { SmallItemCardComponent } from './reorder-beverages-modal/small-item-card/small-item-card.component';
import { ItemContainerComponent } from './offer-dessert-modal/item-container/item-container.component';
import { ShowGreetingsModalComponent } from './show-greetings-modal/show-greetings-modal.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [
    HomePage,
    CallServiceComponent,
    SendPayRequestComponent,
    ReorderBeveragesModalComponent,
    OfferDessertModalComponent,
    ShowFeedbackModalComponent,
    SmallItemCardComponent,
    ItemContainerComponent,
    ShowGreetingsModalComponent,
  ],
})
export class HomePageModule {}
