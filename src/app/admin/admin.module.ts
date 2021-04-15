import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPageRoutingModule } from './admin-routing.module';

import { AdminPage } from './admin.page';
import { TableNumberSettingComponent } from './table-number-setting/table-number-setting.component';
import { LogoutSettingComponent } from './logout-setting/logout-setting.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, AdminPageRoutingModule],
  declarations: [
    AdminPage,
    TableNumberSettingComponent,
    LogoutSettingComponent,
  ],
})
export class AdminPageModule {}
