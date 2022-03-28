import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeadsetPage } from './headset.page';

const routes: Routes = [
  {
    path: '',
    component: HeadsetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeadsetPageRoutingModule {}
