import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  public static resultObj:any;
  public static studentObj:any;
  //array
  private students: Student[] = [
    {
      rollNo: 1,
      name: 'Student A',
      dateOfBirth: '05-08-2000',
      score: 100
    },
    { 
      rollNo: 2,
      name: 'Student B',
      dateOfBirth: '05-08-2000',
      score: 97
    },
    {
      rollNo: 3,
      name: 'Student C',
      dateOfBirth: '05-08-2000',
      score: 40
    },
    {
      rollNo: 4,
      name: 'Student D',
      dateOfBirth: '05-08-2000',
      score: 90
    }
  ];
  constructor() {}
  getAllStudents():Student[]{
    return this.students;
  }
  addStudent(obj:Student):void{
    this.students.push(obj);
  }
  findResult(rollNo:any,name:any):any{
  
    for(let obj of this.students){
      if(obj.rollNo==rollNo && obj.name==name){
        return obj;
      }
      
    }
    return false;
  }
  resultFound(obj:any):any{
    StudentService.resultObj=obj;
  }
  getResult(){
    return StudentService.resultObj;
  }
  delete(rollNo:number){
    for(let student of this.students){
      if(student.rollNo==rollNo){
        this.students.splice(this.students.indexOf(student),1);
      }
    }
  }
  findStudent(rollNo:number){
    for(let student of this.students){
      if(student.rollNo===rollNo){
        StudentService.studentObj=student;
      }
    }
    
  }
  getStudentToEdit(){
    return StudentService.studentObj;
  }
  editStudent(obj:any){
    for(let student of this.students){
      if(student.rollNo===StudentService.studentObj.rollNo){
        student.dateOfBirth=obj.dateOfBirth;
        student.name=obj.name;
        student.rollNo=obj.rollNo;
        student.score=obj.score;
        
      }
    }
  }
}
