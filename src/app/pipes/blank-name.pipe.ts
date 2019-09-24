import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'blankName'
})
export class BlankNamePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(value == undefined || value.length < 1 )
      return "Not Provided"
    else 
      return value;
  }

}
