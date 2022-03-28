import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MousepadPage } from './mousepad.page';

const routes: Routes = [
  {
    path: '',
    component: MousepadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MousepadPageRoutingModule {}
