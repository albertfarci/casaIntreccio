import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AudioguidaPageRoutingModule } from './audioguida-routing.module';

import { AudioguidaPage } from './audioguida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AudioguidaPageRoutingModule
  ],
  declarations: [AudioguidaPage]
})
export class AudioguidaPageModule {}
