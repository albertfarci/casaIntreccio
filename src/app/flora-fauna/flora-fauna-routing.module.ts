import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FloraFaunaPage } from './flora-fauna.page';

const routes: Routes = [
  {
    path: '',
    component: FloraFaunaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FloraFaunaPageRoutingModule {}
