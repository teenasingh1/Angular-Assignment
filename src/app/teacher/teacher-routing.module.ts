import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllrecordsComponent } from './components/allrecords/allrecords.component';
import { AddRecordComponent } from './components/add-record/add-record.component';
import { EditComponent } from './components/edit/edit.component';

const routes: Routes = [
  {path:'teacher-login',component:AllrecordsComponent},
  {path:'add-record',component:AddRecordComponent},
  {path:'edit',component:EditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
