import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AudioguidaDetailPageRoutingModule } from './audioguida-detail-routing.module';

import { AudioguidaDetailPage } from './audioguida-detail.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AudioguidaDetailPageRoutingModule,
    SharedModule
  ],
  declarations: [AudioguidaDetailPage]
})
export class AudioguidaDetailPageModule {}
