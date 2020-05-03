import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  // pure: false
  // pure: false means pipe recalculate whenever data has change
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName : string): any {
    if(value.length === 0  || filterString === '') {
      return value;
    }

    const resultArray = [];
    for (const item of value) {
      if(item[propName] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
