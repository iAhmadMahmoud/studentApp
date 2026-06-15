import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICourses } from '../../models/icourses';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { DiscountPipe } from '../../pipes/discount-pipe';
import { AppDisableAfterClick } from '../../directives/app-disable-after-click';

@Component({
  selector: 'app-courses',
  imports: [NgClass, FormsModule, CommonModule, DiscountPipe, AppDisableAfterClick],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses {
  totalOrderPrice: number = 0;

  @Input('selectedid') selectedCategoryId: number = 0;
  @Output() onTotalOrderPriceChanged: EventEmitter<number> = new EventEmitter<number>();
  courses: ICourses[] = [
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

  buy(price: number, quantity: string, evt: MouseEvent) {
    this.totalOrderPrice += price * +quantity;
    //2- firing the event
    this.onTotalOrderPriceChanged.emit(this.totalOrderPrice);
  }

  get filteredCourses() {
    if (this.selectedCategoryId == 0) return this.courses;

    return this.courses.filter((c) => c.catId == this.selectedCategoryId);
  }

  register(course: any,priceSpan:string) {
    if (course.seats > 0) {
      course.seats--;
    }

    this.totalOrderPrice += +priceSpan;
    this.onTotalOrderPriceChanged.emit(this.totalOrderPrice);
  }
}
