import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FloraFaunaDetailPageRoutingModule } from './flora-fauna-detail-routing.module';

import { FloraFaunaDetailPage } from './flora-fauna-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FloraFaunaDetailPageRoutingModule
  ],
  declarations: [FloraFaunaDetailPage]
})
export class FloraFaunaDetailPageModule {}
