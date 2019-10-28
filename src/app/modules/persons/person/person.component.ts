import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../shared/person.service';
import { Person } from 'src/model/person.model';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor(
    private personService: PersonService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {

  }
  CreateAndUpdate(currentPerson: Person) {
    console.log(currentPerson);
    if (currentPerson.id == null) {
      console.log('create');
    // this.CreatePerson(currentPerson);
      
       this.personService.CreatePerson(currentPerson).subscribe(
        data => {
          this.personService.getAllPersons();
        });
        
      this.toastr.success('Successful ', 'Successful operation');
    } else {
      console.log('updated');
      //this.UpdatePerson(currentPerson);
      this.personService.UpdatePerson(currentPerson).subscribe(
        data => {
          this.personService.getAllPersons();
        });

      this.toastr.info('Successful ', 'Edited Person');
    
    }
  }
  CreatePerson(person: Person) {
    this.personService.CreatePerson(person).subscribe();
  }
  UpdatePerson(person: Person) {
    this.personService.UpdatePerson(person).subscribe();
  }
  clear(currentPerson: Person) {
    this.personService.currentPerson = {
      id: null,
      Name: '',
      Lastname: '',
      Age: null,
      University: ''
    }
  }
  // resetForm(form? : NgForm) {
  //   if (form != null)
  //     form.resetForm();
  //   this.personService.currentPerson = {
  //     id: null,
  //     Name: '',
  //     Lastname: '',
  //     Age: null,
  //     University: ''
  //   }
  // }


}
