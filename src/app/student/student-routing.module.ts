import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewResultComponent } from './components/view-result/view-result.component';
import { ResultComponent } from './components/result/result.component';

const routes: Routes = [
  {path:'student-login',component:ViewResultComponent},
  {path:'result',component:ResultComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
