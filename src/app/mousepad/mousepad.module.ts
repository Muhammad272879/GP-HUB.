import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MousepadPageRoutingModule } from './mousepad-routing.module';

import { MousepadPage } from './mousepad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MousepadPageRoutingModule
  ],
  declarations: [MousepadPage]
})
export class MousepadPageModule {}
