import { Component } from '@angular/core';
import { ICourses } from '../../models/icourses';
import { CommonModule } from '@angular/common';
import { ICategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-courses',
  imports: [NgClass,FormsModule,CommonModule],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses {
selectedCategoryId: number = 0;
  categories: ICategory[] = [
  { id: 0, title: 'All' },
  { id: 1, title: 'Programming' },
  { id: 2, title: 'Design' },
  { id: 3, title: 'Marketing' },
  { id: 4, title: 'Business' }
  ];
courses: ICourses[] = [
  {
    id: 1,
    title: 'Angular Fundamentals',
    instructor: 'Ahmed Mahmoud',
    price: 300,
    seats: 5,
    image: 'https://picsum.photos/id/1/300/200',
    catId: 1
  },
  {
    id: 2,
    title: 'UI/UX Design',
    instructor: 'Sara Ali',
    price: 250,
    seats: 2,
    image: 'https://picsum.photos/id/2/300/200',
    catId: 2
  },
  {
    id: 3,
    title: 'Digital Marketing',
    instructor: 'Mohamed Adel',
    price: 200,
    seats: 0,
    image: 'https://picsum.photos/id/3/300/200',
    catId: 3
  },
  {
    id: 4,
    title: 'Business Management',
    instructor: 'Nour Hassan',
    price: 400,
    seats: 4,
    image: 'https://picsum.photos/id/4/300/200',
    catId: 4
  },
  {
    id: 5,
    title: 'ASP.NET Core',
    instructor: 'Omar Khaled',
    price: 350,
    seats: 1,
    image: 'https://picsum.photos/id/5/300/200',
    catId: 1
  }
];

get filteredCourses() {

  if (this.selectedCategoryId == 0)
    return this.courses;

  return this.courses.filter(
    c => c.catId == this.selectedCategoryId
  );
}

  register(course: any) {
    if (course.seats > 0) {
      course.seats--;
    }
  }
}
