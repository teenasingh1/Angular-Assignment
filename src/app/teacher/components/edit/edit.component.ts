import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  constructor(private _studentService:StudentService,private router:Router){}
  studentObj=this._studentService.getStudentToEdit();
  name=this.studentObj.name;
  dateOfBirth=this.studentObj.dateOfBirth;
  rollNo=this.studentObj.rollNo;
  score=this.studentObj.score;
  msg:any;
  redirect(){
    this.router.navigate(['/teacher-login']);
  }
  editRecord(editRecordForm:NgForm){
    this._studentService.editStudent(editRecordForm.value);
    this.msg="Record Edited Successfully.."
  }
}
