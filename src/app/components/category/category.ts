import { Component, inject } from '@angular/core';
import { ICategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { Courses } from '../courses/courses';
import { CategoryService } from '../../services/category-service';

@Component({
  selector: 'app-category',
  imports: [FormsModule, Courses],
  templateUrl: './category.html',
  styleUrl: './category.css',
})
export class Category {
  private category = inject(CategoryService)

  categories : ICategory[] = this.category.getAllCategory();
  selectedCategoryId: number = 0;
  orderPrice:number=0

    setOrderPrice(recievedTotalOrderPrice:number){
    this.orderPrice=recievedTotalOrderPrice
  }
}
