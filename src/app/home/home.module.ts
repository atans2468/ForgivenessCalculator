import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { AdsenseModule } from 'ng2-adsense';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    AdsenseModule.forRoot({
      adClient: 'ca-pub-3806254277644640', //TODO add adSlot: SLOT_HERE,
    })
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
