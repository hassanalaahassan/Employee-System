import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { TableComponent } from "../../Shared/shared-Components/table/table.component";
import { AnimateScrollDirective } from '../../dirctives/animate-scroll.directive';
import { EmployeeService } from '../../Services/employee.service';
import { IEmployee } from '../../Interfaces/Employee';
import { DepartmentsService } from '../../Services/departments.service';
import { IChilddepartment } from '../../Interfaces/Department';
import { LoaderService } from '../../Services/loader.service';
import { LoaderComponent } from "../../Shared/shared-Components/loader/loader.component";
import { SweetAlertService } from '../../Services/sweet-alert.service';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [TableComponent, AnimateScrollDirective, LoaderComponent],
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employeeHeader: string[] = [
    "Name",
    "Email",
    "Department",
    "Number",
    "Gender"
  ];
  employees: WritableSignal<Array<IEmployee>> = signal([]);

  departments: WritableSignal<Array<IChilddepartment>> = signal([]);

  constructor(
    private employeeService: EmployeeService,
    private departmentsServices: DepartmentsService,
    public loader:LoaderService,
    private sweetToaster:SweetAlertService
  ) {}

  ngOnInit(): void {
    this.getEmployees();
    this.getAllChildDepartments();
  }

  getEmployees(): void {
    this.employeeService.getAllEmployees().subscribe({
      next: (response: IEmployee[]) => {
        this.employees.set(response);
      }
    });
  }

  getAllChildDepartments(): void {
    this.departmentsServices.getAllChildDepartments().subscribe({
      next: (response) => {
        this.departments.set(response.data);
      }
    });
  }

  async showSweet(employee:IEmployee):Promise<void>{
    const message = `Are you sure to delete ${employee.employeeName} ?`;
    const isConfirmed = await this.sweetToaster.showConfirmation(message , 'Delete Employee')
    if (isConfirmed) {
      this.deleteEmployee(employee.employeeId)
    }
  }
  deleteEmployee(id:number):void{
    this.employeeService.removeEmployeeById(id).subscribe({
      next:(response)=>{
        console.log(response);
        this.getEmployees()
      }
    })
  }
}
