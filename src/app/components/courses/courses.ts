import { Component, effect, EventEmitter, inject, input, Input, output, Output } from '@angular/core';
import { ICourses } from '../../models/icourses';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { DiscountPipe } from '../../pipes/discount-pipe';
import { AppDisableAfterClick } from '../../directives/app-disable-after-click';
import { CouseService } from '../../services/couse-service';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-courses',
  imports: [NgClass, FormsModule, CommonModule, DiscountPipe, AppDisableAfterClick],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses {
  private coursesService = inject(CouseService);
  private _router = inject(Router)
  totalOrderPrice: number = 0;
  
  selectedid = input<number>(0);
  onTotalOrderPriceChanged = output<number>();
  
  courses: ICourses[] = this.coursesService.getAllCourses();
  filteredCourses: ICourses[]
  
  constructor() {
    this.filteredCourses = this.courses
    
    effect(()=>{
      this.filteredCourses = this.coursesService.getAllCoursesByCatId(this.selectedid())
    })
  }
  
  register(course: any, priceSpan: string) {
    if (course.seats > 0) {
      course.seats--;
    }
    
    this.totalOrderPrice += +priceSpan;
    this.onTotalOrderPriceChanged.emit(this.totalOrderPrice);
  }
  navToDetails(id:number) {
  this._router.navigateByUrl(`/details/${id}`);
}
}
