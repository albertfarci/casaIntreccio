import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AudioguidaPage } from './audioguida.page';

const routes: Routes = [
  {
    path: '',
    component: AudioguidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AudioguidaPageRoutingModule {}
