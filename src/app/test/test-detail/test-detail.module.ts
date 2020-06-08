import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TestDetailPage } from './test-detail.page';

import { TestDetailPageRoutingModule } from './test-detail-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestDetailPageRoutingModule
  ],
  declarations: [TestDetailPage]
})
export class TestDetailPageModule {}
