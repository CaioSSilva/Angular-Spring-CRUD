import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    if (value == 'Front-End') {
      return 'developer_mode_tv'
    } else {
      return 'data_array'
    }
  }

}
