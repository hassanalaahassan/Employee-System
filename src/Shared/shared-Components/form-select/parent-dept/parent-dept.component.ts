import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IParentdepartment } from '../../../../Interfaces/Department';

@Component({
  selector: 'app-parent-dept',
  standalone: true,
  imports: [],
  templateUrl: './parent-dept.component.html',
  styleUrl: './parent-dept.component.scss'
})
export class ParentDeptComponent {
  @Input({required:true}) label: string = '';
  @Input({required:true}) placeholder: string = '';
  @Input() parentDepartment: IParentdepartment[] | null = [];
  @Output() parentDeprId:EventEmitter<number> = new EventEmitter<number>()

  onIdChange(id:number):void{
    this.parentDeprId.emit(id)
  }
}
