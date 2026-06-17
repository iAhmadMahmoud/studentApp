import { Injectable } from '@angular/core';
import { ICategory } from '../models/icategory';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categories: ICategory[] = [
    { id: 0, title: 'All' },
    { id: 1, title: 'Programming' },
    { id: 2, title: 'Design' },
    { id: 3, title: 'Marketing' },
    { id: 4, title: 'Business' },
  ];

  getAllCategory(): ICategory[] {
    return this.categories;
  }
}
