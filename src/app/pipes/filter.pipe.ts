import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }


  transform(value: any[] | null, phrase: string | number | boolean): any[] | null {
    if (!Array.isArray(value) || !phrase) {

      return value;
    }

    phrase = typeof phrase !== 'number' ? ('' + phrase).toLowerCase() : phrase;

    return value.filter( item => {
      //console.log((Object.values(item)).toString());
      return ((Object.values(item)).toString().toLowerCase().includes(''+phrase))
    });
  }

}

