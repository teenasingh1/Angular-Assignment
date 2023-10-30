import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { AllrecordsComponent } from './components/allrecords/allrecords.component';
import { AddRecordComponent } from './components/add-record/add-record.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './components/edit/edit.component';


@NgModule({
  declarations: [
    AllrecordsComponent,
    AddRecordComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TeacherRoutingModule
  ]
})
export class TeacherModule { }
