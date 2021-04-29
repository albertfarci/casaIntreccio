import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChiesaDetailPageRoutingModule } from './casa-detail-routing.module';

import { CasaDetailPage } from './casa-detail.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChiesaDetailPageRoutingModule,
    SharedModule
  ],
  declarations: [CasaDetailPage]
})
export class ChiesaDetailPageModule {}
