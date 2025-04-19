import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IEmployee } from '../../../Interfaces/Employee';
import { DepartmentsService } from '../../../Services/departments.service';
import { IChilddepartment } from '../../../Interfaces/Department';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent  {

  @Input() tableHeader:string[] = []
  @Input() employees:IEmployee[] = []
  @Input() childDepartments:IChilddepartment[] = []
  @Output() delEmployee:EventEmitter<IEmployee> = new EventEmitter()


  constructor(){}


  getEmpDepartment(id:number):string|undefined{
    return this.childDepartments.find((dept:IChilddepartment)=> {return dept.childDeptId === id})?.departmentName;
  }

  removeEmployee(employee:IEmployee):void{
    this.delEmployee.emit(employee)
  }


}
