import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent {
  rollNo=undefined;
  name=undefined;
  dateOfBirth=undefined;
  score=undefined;
  msg:string="";
  constructor(private _studentService:StudentService,private router:Router){}
  addRecord(recordForm:NgForm):void{
    recordForm.value.dateOfBirth=recordForm.value.dateOfBirth.split('-').reverse().join('-');
    this._studentService.addStudent(recordForm.value);
    this.msg="Record added Successfully...";
  }
  redirect(){
    this.router.navigate(['/teacher-login']);
  }
}
