import { Component, OnInit } from '@angular/core';
import { FormFieldComponent } from "../../../Shared/shared-Components/form-field/form-field.component";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormSelectComponent } from "../../../Shared/shared-Components/form-select/form-select.component";
import { DepartmentsService } from '../../../Services/departments.service';
import { IChilddepartment, IParentdepartment } from '../../../Interfaces/Department';
import { ParentDeptComponent } from "../../../Shared/shared-Components/form-select/parent-dept/parent-dept.component";
import { EmployeeService } from '../../../Services/employee.service';
import { IEmployee } from '../../../Interfaces/Employee';

@Component({
  selector: 'app-create-form',
  standalone: true,
  imports: [
    FormFieldComponent,
    ReactiveFormsModule,
    FormSelectComponent,
    ParentDeptComponent,
    FormsModule
  ],
  templateUrl: './create-form.component.html',
  styleUrl: './create-form.component.scss'
})
export class CreateFormComponent implements OnInit {

  employeeForm!: FormGroup;

  parentDepartments:IParentdepartment[] = []
  childDepartments:IChilddepartment[] = []
  gender:string[] =["Male","Female"]
  role:string[] =["Admin","Employee"]
  isSubmitting :boolean = false

   products = [
    {
      code: 'P001',
      name: 'Laptop',
      category: 'Electronics',
      quantity: 10
    },
    {
      code: 'P002',
      name: 'Chair',
      category: 'Furniture',
      quantity: 5
    },
    {
      code: 'P003',
      name: 'Notebook',
      category: 'Stationery',
      quantity: 25
    }
  ];

  constructor(
    private departmenrs:DepartmentsService,
    private employeeService:EmployeeService
  ){}

  ngOnInit(): void {
    this.getParentsDepartemnts()
    this.employeeForm = this.buildForm();
  }


  getParentsDepartemnts():void{
    this.departmenrs.getParentDepartments().subscribe({
      next:(response)=>{
        if(response.result){
          this.parentDepartments = response.data
        }
      }
    })
  }
  getChildDepartments(id:number):void{
    this.departmenrs.getChildDepartmentsById(id).subscribe({
      next:(response)=>{
        if(response.result){
          this.childDepartments = response.data
        }
      }
    })

  }
  addEmployee():void{
    if(this.employeeForm.valid){
      this.isSubmitting  = true
      this.employeeService.createEmployee(this.employeeForm.value as IEmployee).subscribe({
        next:(response)=>{
          this.employeeForm.reset({
            employeeId: 0,
            createdDate: new Date()
          })
        },
        complete:()=>{
          this.isSubmitting  = false
        }
      })
    }
  }
  private buildForm(): FormGroup {
    return new FormGroup({
      employeeId: new FormControl(0),
      employeeName: new FormControl('', [Validators.required]),
      contactNo: new FormControl('', [Validators.required]),
      emailId: new FormControl('', [Validators.required, Validators.email]),
      deptId: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      gender: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required]),
      createdDate: new FormControl(new Date()),
    });
  }

}
