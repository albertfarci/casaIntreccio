import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FloraFaunaDetailPage } from './flora-fauna-detail.page';

const routes: Routes = [
  {
    path: '',
    component: FloraFaunaDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FloraFaunaDetailPageRoutingModule {}
