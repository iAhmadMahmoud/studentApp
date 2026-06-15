import { Component } from '@angular/core';
import { ICategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { Courses } from '../courses/courses';

@Component({
  selector: 'app-category',
  imports: [FormsModule, Courses],
  templateUrl: './category.html',
  styleUrl: './category.css',
})
export class Category {
  selectedCategoryId: number = 0;
  orderPrice:number=0
  categories: ICategory[] = [
    { id: 0, title: 'All' },
    { id: 1, title: 'Programming' },
    { id: 2, title: 'Design' },
    { id: 3, title: 'Marketing' },
    { id: 4, title: 'Business' },
  ];
    setOrderPrice(recievedTotalOrderPrice:number){
    this.orderPrice=recievedTotalOrderPrice
  }
}
