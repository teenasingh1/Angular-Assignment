import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  constructor(private _studentService:StudentService, private router:Router){}
  result=this._studentService.getResult();
  rollNo=this.result.rollNo;
  name=this.result.name;
  dateOfBirth=this.result.dateOfBirth;
  score=this.result.score;

  redirect(){
    this.router.navigate(['/student-login']);
  }
}
