import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';


@NgModule({
  declarations: [
    HomeComponent,
    ErrorComponent
  ],
  imports: [ 
    CommonModule,
    
    HomeRoutingModule
  ]
})
export class HomeModule { }
