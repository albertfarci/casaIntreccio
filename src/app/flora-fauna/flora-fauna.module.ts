import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FloraFaunaPageRoutingModule } from './flora-fauna-routing.module';

import { FloraFaunaPage } from './flora-fauna.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FloraFaunaPageRoutingModule,
    SharedModule
  ],
  declarations: [FloraFaunaPage]
})
export class FloraFaunaPageModule {}
