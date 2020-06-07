import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransitionToPageRoutingModule } from './transition-to-routing.module';

import { TransitionToPage } from './transition-to.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransitionToPageRoutingModule
  ],
  declarations: [TransitionToPage]
})
export class TransitionToPageModule {}
