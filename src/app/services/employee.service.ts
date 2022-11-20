import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PersonModel } from '../model/person.model';
import { CreateEmployeeModel } from '../model/create-employee.model';
import {ApiResponse} from "./api.response";
import {EmployeeResponse} from './employee.response';


@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }


  getAll(): Observable<PersonModel[]> {
    return this._httpClient.get<ApiResponse<EmployeeResponse[]>>
    ('https://dummy.restapiexample.com/api/v1/employees',
    ).pipe(
      map( (response: ApiResponse<EmployeeResponse[]>) =>{
        return response.data.map((employeeResponse: EmployeeResponse) => {
          return {
            name: employeeResponse.employee_name,
            personalNumber: employeeResponse.id,
            mail: employeeResponse.employee_name + '@lowgular.com',
            img:employeeResponse.profile_image,
            salary:employeeResponse.employee_salary,
            age: employeeResponse.employee_age,
          }
          })
        }))
      }




  // getAll(): Observable<PersonModel[]> {
  //   return this._httpClient.get<PersonModel[]>('assets/data/people.json');
  // }


  create(employees: CreateEmployeeModel): Observable<void> {
    return this._httpClient.post('https://dummy.restapiexample.com/api/v1/create', employees).pipe(map(_ => void 0));
  }

  delete(id: number): Observable<void> {
    return this._httpClient.delete('https://dummy.restapiexample.com/api/v1/delete/' + id).pipe(map(_ => void 0));
  }

}



