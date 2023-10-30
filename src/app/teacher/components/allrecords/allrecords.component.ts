import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-allrecords',
  templateUrl: './allrecords.component.html',
  styleUrls: ['./allrecords.component.css']
})
export class AllrecordsComponent {
  students=this._studentService.getAllStudents();
  studentObj:any;
  constructor(private _studentService:StudentService,private router:Router){}

  navigateToAdd(){
    this.router.navigate(['/add-record']);
  }
  delete(rollNo:number){
    this._studentService.delete(rollNo);
  }
  edit(rollNo:number){
    this._studentService.findStudent(rollNo);
    this.router.navigate(['/edit'])
  }
}
