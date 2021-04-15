import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemsPageRoutingModule } from './items-routing.module';

import { ItemsPage } from './items.page';
import { ItemCardComponent } from './item-card/item-card.component';
import { SideNavigationModule } from '../elements/side-navigation/side-navigation.module';
import { BackgroundLayoutModule } from '../elements/background-layout/background-layout.module';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemConfirmComponent } from './item-confirm/item-confirm.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemsPageRoutingModule,
    SideNavigationModule,
    BackgroundLayoutModule,
  ],
  declarations: [
    ItemsPage,
    // SideNavigationComponent,
    // BackgroundLayoutComponent,
    ItemCardComponent,
    ItemDetailComponent,
    ItemConfirmComponent,
  ],
})
export class ItemsPageModule {}
