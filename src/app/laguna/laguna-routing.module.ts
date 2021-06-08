import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LagunaPage } from './laguna.page';

const routes: Routes = [
  {
    path: '',
    component: LagunaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LagunaPageRoutingModule {}
