import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFilter'
})
export class MyFilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    //return [items]
     if(!items) return [];
     if(!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter( it => {
      if( it['name'].toLowerCase().includes(searchText) )
        return it
    });
   }

}
