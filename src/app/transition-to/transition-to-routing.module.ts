import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransitionToPage } from './transition-to.page';

const routes: Routes = [
  {
    path: '',
    component: TransitionToPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransitionToPageRoutingModule {}
