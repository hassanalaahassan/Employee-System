import { Component } from '@angular/core';
import { AnimateScrollDirective } from '../../dirctives/animate-scroll.directive';
import { CreateFormComponent } from "../../Components/create-employee/create-form/create-form.component";

@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [AnimateScrollDirective, CreateFormComponent],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.scss'
})
export class CreateEmployeeComponent {

}
