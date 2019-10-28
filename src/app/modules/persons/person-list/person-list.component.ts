import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../shared/person.service';
import { Person } from 'src/model/person.model';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  filterPersons='';
  allPerson: Person[];
  p:number=1;
  
  constructor(
    private personService: PersonService,
    private toastr: ToastrService
  ) { }

 

  ngOnInit() {
    this.getAllPerson();
  }

  getAllPerson() {
   // this.personService.getAllPersons().subscribe(
      // (data: Person[]) => {
      //   this.allPerson = data;
      // });
    this.personService.getAllPersons();
  }

  deletePerson(id: number) {
    console.log(id);
    this.personService.deletePerson(id).subscribe(
      (data:Person)=>{
        this.getAllPerson();
      });
      this.toastr.error('Deleted ', 'Person Deleted');
  }
  edit(person:Person){
    this.personService.currentPerson=Object.assign({},person);
  }

}
