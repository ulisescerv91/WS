import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getFirstLetter'
})
export class GetFirstLetterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return (value != undefined)? value[0] : ""
  }

}
