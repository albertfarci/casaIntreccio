import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LagunaDetailPageRoutingModule } from './laguna-detail-routing.module';

import { LagunaDetailPage } from './laguna-detail.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LagunaDetailPageRoutingModule,
    SharedModule
  ],
  declarations: [LagunaDetailPage]
})
export class LagunaDetailPageModule {}
