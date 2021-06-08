import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LagunaPageRoutingModule } from './laguna-routing.module';

import { LagunaPage } from './laguna.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LagunaPageRoutingModule
  ],
  declarations: [LagunaPage]
})
export class LagunaPageModule {}
