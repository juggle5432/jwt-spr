import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from 'src/model/person.model';

// @Injectable({
//   providedIn: 'root'
// })
const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class PersonService {
  
   /*--  The first install for the comand -> npm install json-server -g   */

   /*---------------------------------------------------------------------*/
   /*                    JSON DATA FOR EACH REQUEST                       */
   /* In the asset route place this command : json-server --watch db.json */
   /*---------------------------------------------------------------------*/

  url:string = 'http://localhost:3000/Person';
 
  allPerson:Person[];
  
  currentPerson: Person = {
    id: null,
    Name: '',
    Lastname: '',
    Age: null,
    University: ''
  }
  constructor(
    private http: HttpClient
  ) { }
 
  getAllPersons(){
   // return this.http.get<Person[]>(this.url,headerOption);
    return this.http.get(this.url).subscribe(
      (data :Person[])=>{
        this.allPerson=data;
        // console.table(this.allPerson);
        console.log(this.allPerson);
      }
    )
  }
  //any para cualquier tipo de variable
  deletePerson(id: number): Observable<Person> {
    return this.http.delete<Person>(this.url + '/' + id, headerOption);
  }
  CreatePerson(person: Person): Observable<Person> {
    return this.http.post<Person>(this.url, person, headerOption);
  }
  UpdatePerson(person: Person) {
    return this.http.put<Person>(this.url +'/'+ person.id, person, headerOption);
  }
}
