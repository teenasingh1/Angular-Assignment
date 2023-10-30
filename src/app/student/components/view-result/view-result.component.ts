import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-view-result',
  templateUrl: './view-result.component.html',
  styleUrls: ['./view-result.component.css']
})
export class ViewResultComponent {
  submittedRollNo:any=undefined;
  submittedName:any=undefined;
  name:any;
  rollNo:any;
  dateOfBirth:any=undefined;
  score=0;
  result:any;
  errorMsg:string="";
  constructor(private _studentService:StudentService,private router:Router){}

  findResult(findResultForm:NgForm){
    this.submittedRollNo=findResultForm.value.rollNo;
    this.submittedName=findResultForm.value.name;
    this.result=this._studentService.findResult(this.submittedRollNo,this.submittedName);
    
    if(this.result==false){
        this.errorMsg="Result Not Found"
        //console.log(this.errorMsg)
    }
    else{
      this._studentService.resultFound(
        {
          'rollNo':this.result.rollNo,
          'name':this.result.name,
          'dateOfBirth':this.result.dateOfBirth,
          'score':this.result.score
        }
      )
      // this.rollNo=this.result.rollNo;
      // this.name=this.result.name;
      // this.dateOfBirth=this.result.dateOfBirth;
      // this.score=this.result.score;

      this.router.navigate(['/result'])
    }
  }
}
