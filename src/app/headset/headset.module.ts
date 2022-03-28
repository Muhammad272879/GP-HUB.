import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeadsetPageRoutingModule } from './headset-routing.module';

import { HeadsetPage } from './headset.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeadsetPageRoutingModule
  ],
  declarations: [HeadsetPage]
})
export class HeadsetPageModule {}
