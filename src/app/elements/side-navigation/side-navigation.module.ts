import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { SideNavigationComponent } from './side-navigation.component';
@NgModule({
  declarations: [SideNavigationComponent],
  imports: [CommonModule, IonicModule.forRoot()],
  exports: [SideNavigationComponent],
})
export class SideNavigationModule {}
