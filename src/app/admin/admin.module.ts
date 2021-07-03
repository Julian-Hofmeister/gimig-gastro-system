import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPageRoutingModule } from './admin-routing.module';

import { AdminPage } from './admin.page';
import { TableNumberSettingComponent } from './table-number-setting/table-number-setting.component';
import { LogoutSettingComponent } from './logout-setting/logout-setting.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { TableNumberPanelComponent } from './table-number-panel/table-number-panel.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, AdminPageRoutingModule],
  declarations: [
    AdminPage,
    TableNumberSettingComponent,
    LogoutSettingComponent,
    AdminLoginComponent,
    TableNumberPanelComponent,
  ],
})
export class AdminPageModule {}
