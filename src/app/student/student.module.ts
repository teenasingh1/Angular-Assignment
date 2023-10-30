import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { ViewResultComponent } from './components/view-result/view-result.component';
import { FormsModule } from '@angular/forms';
import { ResultComponent } from './components/result/result.component';


@NgModule({
  declarations: [
    ViewResultComponent,
    ResultComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
