import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import { PersonModel } from '../model/person.model';
import { CreateEmployeeModel } from '../model/create-employee.model';

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<PersonModel[]> {
    return this._httpClient.get<PersonModel[]>('assets/data/people.json');
  }

  create(employees: CreateEmployeeModel): Observable<any> {
    return this._httpClient.post('https://jsonplaceholder.typicode.com/posts', employees).pipe(map(_ => void 0));
  }
}



