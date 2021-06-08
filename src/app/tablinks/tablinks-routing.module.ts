// tablinks-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablinksPage } from './tablinks.page';

const routes: Routes = [
  {
    path: '',
    component: TablinksPage,
    children: [
      {
        path: 'la-laguna',
        loadChildren: () => import('../laguna/laguna.module').then(m => m.LagunaPageModule)
      },
      {
        path: 'preferiti',
        loadChildren: () => import('../preferiti/preferiti.module').then(m => m.PreferitiPageModule)
      },
      {
        path: 'flora-fauna',
        loadChildren: () => import('../flora-fauna/flora-fauna.module').then(m => m.FloraFaunaPageModule)
      },
      {
        path: 'audioguida',
        loadChildren: () => import('../audioguida/audioguida.module').then(m => m.AudioguidaPageModule)
      },
      {
        path: 'itinerario-detail',
        loadChildren: () => import('../itinerario-detail/itinerario-detail.module').then(m => m.ItinerarioDetailPageModule)
      },
      {
        path: '',
        redirectTo: '/tablinks/la-laguna',
        pathMatch: 'full'
      }, {
        path: 'chiesa-detail/:id',
        loadChildren: () => import('../case-detail/casa-detail.module').then(m => m.ChiesaDetailPageModule)
      }, {
        path: 'itinerario-item-detail/:id',
        loadChildren: () => import('../itinerario-item-detail/itinerario-item-detail.module').then(m => m.ItinerarioItemDetailPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tablinks/la-laguna',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablinksPageRoutingModule { }