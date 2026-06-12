import { Component } from '@angular/core';
import { IStudent } from '../../models/istudent';

@Component({
  selector: 'app-student',
  imports: [],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {
  student:IStudent = {
    id:1,
    name:'Ahmed Mahmoud',
    age:25,
    photoUrl:'https://randomuser.me/api/portraits/men/51.jpg'
  }
}
