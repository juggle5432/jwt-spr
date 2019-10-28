import { Pipe, PipeTransform } from '@angular/core';
// import { PersonService } from '../../shared/person.service';
// import { Person } from 'src/model/person.model';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {

    const resultPersons = [];
    if (arg === '' || arg.length < 3)
      return value;

    for (const person of value) {
      //Devuelve un indice dentro del objeto con la primera ocurrencia , en caso q no , devuelve un -1
      if (person.Name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPersons.push(person);
      };
    };
    return resultPersons;
  }
}
