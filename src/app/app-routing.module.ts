import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'first-time',
    pathMatch: 'full'
  },
  {
    path: 'player',
    loadChildren: () => import('./player/player.module').then( m => m.PlayerPageModule)
  },
  {
    path: 'confirm',
    loadChildren: () => import('./confirm/confirm.module').then( m => m.ConfirmPageModule)
  },
  {
    path: 'first-time',
    loadChildren: () => import('./first-time/first-time.module').then( m => m.FirstTimePageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then( m => m.TestPageModule)
    // children: [
    // {
    //   path: '',
    //   loadChildren: () => import('./test/test.module').then( m => m.TestPageModule)
    // },
    // {
    //   path: 'testTitle',
    //   loadChildren: () => import('./test/test-detail/test-detail.module').then( m => m.TestDetailPageModule)
    // }
    // ]
  },
  {
    path: 'outro',
    loadChildren: () => import('./outro/outro.module').then( m => m.OutroPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
