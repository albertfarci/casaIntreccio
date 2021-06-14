// app-routing.module.ts
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tablinks',
    loadChildren: () => import('./tablinks/tablinks.module').then(m => m.TablinksPageModule)
  },
  {
    path: 'preferiti',
    loadChildren: () => import('./preferiti/preferiti.module').then(m => m.PreferitiPageModule)
  },
  {
    path: 'chiesa-detail',
    loadChildren: () => import('./case-detail/casa-detail.module').then(m => m.ChiesaDetailPageModule)
  },
  {
    path: 'itinerario-item-detail',
    loadChildren: () => import('./itinerario-item-detail/itinerario-item-detail.module').then( m => m.ItinerarioItemDetailPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./progetto/progetto.module').then(m => m.ProgettoPageModule)
  },  {
    path: 'laguna',
    loadChildren: () => import('./laguna/laguna.module').then( m => m.LagunaPageModule)
  },
  {
    path: 'flora-fauna',
    loadChildren: () => import('./flora-fauna/flora-fauna.module').then( m => m.FloraFaunaPageModule)
  },
  {
    path: 'audioguida',
    loadChildren: () => import('./audioguida/audioguida.module').then( m => m.AudioguidaPageModule)
  },
  {
    path: 'flora-fauna-detail',
    loadChildren: () => import('./flora-fauna-detail/flora-fauna-detail.module').then( m => m.FloraFaunaDetailPageModule)
  },
  {
    path: 'laguna-detail',
    loadChildren: () => import('./laguna-detail/laguna-detail.module').then( m => m.LagunaDetailPageModule)
  },
  {
    path: 'audioguida-detail',
    loadChildren: () => import('./audioguida-detail/audioguida-detail.module').then( m => m.AudioguidaDetailPageModule)
  }



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }