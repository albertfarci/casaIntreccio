import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LagunaPageRoutingModule } from './laguna-routing.module';

import { LagunaPage } from './laguna.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LagunaPageRoutingModule,
    SharedModule
  ],
  declarations: [LagunaPage]
})
export class LagunaPageModule {}
