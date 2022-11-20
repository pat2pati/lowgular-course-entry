import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeService } from '../../services/employee.service';
import { EmployeeModel } from '../../model/employee.model';
import {PersonModel} from "../../model/person.model";

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {
  title: string = 'Lista pracowników';
  data$: Observable<PersonModel[] | null> = this._employeeService.getAll();
  constructor(private _employeeService: EmployeeService) { }

  remove(id: string){
    this._employeeService.delete(id).subscribe();
    alert('Users was successfully removed');
    }
  }




