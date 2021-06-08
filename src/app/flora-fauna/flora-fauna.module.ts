import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FloraFaunaPageRoutingModule } from './flora-fauna-routing.module';

import { FloraFaunaPage } from './flora-fauna.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FloraFaunaPageRoutingModule
  ],
  declarations: [FloraFaunaPage]
})
export class FloraFaunaPageModule {}
