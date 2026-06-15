import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
})
export class DiscountPipe implements PipeTransform {
  transform(value: number, percentage: number = 10): number {

    const result = value * ((100-percentage) /100);

    return result;
  }
}
