import { Injectable } from '@angular/core';
import { ICourses } from '../models/icourses';

@Injectable({
  providedIn: 'root',
})
export class CouseService {
  private courses: ICourses[] = [
    {
      id: 1,
      title: 'Angular Fundamentals',
      instructor: 'Ahmed Mahmoud',
      price: 300,
      seats: 5,
      image: 'https://picsum.photos/id/1/300/200',
      catId: 1,
    },
    {
      id: 2,
      title: 'UI/UX Design',
      instructor: 'Sara Ali',
      price: 250,
      seats: 2,
      image: 'https://picsum.photos/id/2/300/200',
      catId: 2,
    },
    {
      id: 3,
      title: 'Digital Marketing',
      instructor: 'Mohamed Adel',
      price: 200,
      seats: 0,
      image: 'https://picsum.photos/id/3/300/200',
      catId: 3,
    },
    {
      id: 4,
      title: 'Business Management',
      instructor: 'Nour Hassan',
      price: 400,
      seats: 4,
      image: 'https://picsum.photos/id/4/300/200',
      catId: 4,
    },
    {
      id: 5,
      title: 'ASP.NET Core',
      instructor: 'Omar Khaled',
      price: 350,
      seats: 1,
      image: 'https://picsum.photos/id/5/300/200',
      catId: 1,
    },
  ];

  getAllCourses(): ICourses[] {
    return this.courses;
  }

  getCourseByCourseId(id: number): ICourses | null {
    let course = this.courses.find((crs) => crs.id === id);
    return (course) ? course : null;
  }

  getAllCoursesByCatId(catId: number): ICourses[] {
    if (catId == 0) {
      return this.courses;
    }
    return this.courses.filter((crs) => crs.catId == catId);
  }
}
