import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriesPageRoutingModule } from './categories-routing.module';

import { CategoriesPage } from './categories.page';
import { CategoryCardComponent } from './category-card/category-card.component';
import { SideNavigationModule } from '../elements/side-navigation/side-navigation.module';
import { BackgroundLayoutModule } from '../elements/background-layout/background-layout.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriesPageRoutingModule,
    SideNavigationModule,
    BackgroundLayoutModule,
  ],
  declarations: [CategoriesPage, CategoryCardComponent],
})
export class CategoriesPageModule {}
