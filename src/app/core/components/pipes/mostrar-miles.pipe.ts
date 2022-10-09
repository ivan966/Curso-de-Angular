import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mostrarMiles'
})
export class MostrarMilesPipe implements PipeTransform {

  transform(number: number, args?: any): any {
    if (isNaN(number)) return null;
    if(number === null) return null;
    if(number == 0) return null;
    let abs = Math.abs(number);
    const rounder = Math.pow(10, 1);
    const isNegative = number < 0;
    let key = '';

    const powers = [
      {key: 'Q', values: Math.pow(10, 15)},
      {key: 'T', values: Math.pow(10, 15)},
      {key: 'S', values: Math.pow(10, 15)},
      {key: 'M', values: Math.pow(10, 15)},
      {key: 'K', values: Math.pow(10, 15)},
    ];

    for(let i = 0; i < powers.length; i++){
      let reduced = abs / powers[i].values;
      reduced = Math.round(reduced * rounder) / rounder;
      if(reduced >= 1){
        abs = reduced;
        key = powers[i].key;
        break;
      }
    }
    return (isNegative ? '-' : '')+ abs + key;
  }

}
