import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartPageRoutingModule } from './cart-routing.module';

import { CartPage } from './cart.page';
import { BackgroundLayoutModule } from '../elements/background-layout/background-layout.module';
import { SideNavigationModule } from '../elements/side-navigation/side-navigation.module';
import { OrderCardComponent } from './order-card/order-card.component';
import { OrderConfirmComponent } from './order-confirm/order-confirm.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    CartPageRoutingModule,
    BackgroundLayoutModule,
    SideNavigationModule,
  ],
  declarations: [CartPage, OrderCardComponent, OrderConfirmComponent],
})
export class CartPageModule {}
