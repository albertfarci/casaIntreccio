import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LagunaDetailPage } from './laguna-detail.page';

const routes: Routes = [
  {
    path: '',
    component: LagunaDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LagunaDetailPageRoutingModule {}
