import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasaDetailPage } from './casa-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CasaDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChiesaDetailPageRoutingModule {}
