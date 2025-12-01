import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LandingPageComponent } from './features/landing-page/landing-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FormsModule
  ]
})
export class CoreModule { }
