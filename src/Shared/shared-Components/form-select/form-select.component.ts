import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IChilddepartment, IParentdepartment } from '../../../Interfaces/Department';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-select',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './form-select.component.html',
  styleUrl: './form-select.component.scss'
})
export class FormSelectComponent {
  @Input({required:true}) label: string = '';
  @Input({required:true}) placeholder: string = '';
  @Input() childDepartment: IChilddepartment[] | null = [];
  @Input() chooices: any[] | null = [];
  @Input({required:true}) controlName: any ;



}
