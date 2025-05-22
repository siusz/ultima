import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContePageRoutingModule } from './conte-routing.module';

import { ContePage } from './conte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContePageRoutingModule
  ],
  declarations: [ContePage]
})
export class ContePageModule {}
