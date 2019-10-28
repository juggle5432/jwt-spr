import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PersonComponent } from './person/person.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonService } from '../shared/person.service';
import { ToastrModule} from 'ngx-toastr';
import { FilterPipe } from './person-list/filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination'; 





@NgModule({
  declarations: [PersonComponent, PersonListComponent, FilterPipe],
 //Add the components
  exports:[PersonComponent,PersonListComponent],
  //Add the services
  providers:[PersonService],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    ToastrModule.forRoot({
      timeOut:1000,
      positionClass:'toast-top-right',
      preventDuplicates:false
    }),
  ]
})
export class PersonsModule { }
