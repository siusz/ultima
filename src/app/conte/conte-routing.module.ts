import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContePage } from './conte.page';

const routes: Routes = [
  {
    path: '',
    component: ContePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContePageRoutingModule {}
