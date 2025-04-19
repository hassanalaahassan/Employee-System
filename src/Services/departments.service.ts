import { Injectable } from '@angular/core';
import { ClinetApiService } from './clinet-api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  constructor(private clinet:ClinetApiService) { }

  getParentDepartments():Observable<any>{
    return this.clinet.getMethod('GetParentDepartment')
  }
  getChildDepartmentsById(deptId:number):Observable<any>{
    return this.clinet.getMethod(`GetChildDepartmentByParentId?deptId=${deptId}`)
  }
  getAllChildDepartments():Observable<any>{
    return this.clinet.getMethod(`GetAllChildDepartment`)
  }
  
}
