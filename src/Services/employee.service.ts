import { Injectable } from '@angular/core';
import { ClinetApiService } from './clinet-api.service';
import { IEmployee } from '../Interfaces/Employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private clinet:ClinetApiService) { }

  createEmployee(emp:IEmployee):Observable<any>{
    return this.clinet.postMethod('CreateEmployee',emp)
  }
  removeEmployeeById(id:number):Observable<any>{
    return this.clinet.deleteMethod(`DeleteEmployee/${id}`)
  }
  getAllEmployees():Observable<any>{
    return this.clinet.getMethod('GetAllEmployees')
  }

}
