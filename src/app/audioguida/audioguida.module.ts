import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AudioguidaPageRoutingModule } from './audioguida-routing.module';

import { AudioguidaPage } from './audioguida.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AudioguidaPageRoutingModule,
    SharedModule
  ],
  declarations: [AudioguidaPage]
})
export class AudioguidaPageModule {}
