import { Component, Input } from '@angular/core';
import { IButton } from '../../../Interfaces/Button.config';

@Component({
  selector: 'app-button-factory',
  standalone: true,
  imports: [],
  templateUrl: './button-factory.component.html',
  styleUrl: './button-factory.component.scss'
})
export class ButtonFactoryComponent {


  @Input() config:IButton={} as IButton

}
