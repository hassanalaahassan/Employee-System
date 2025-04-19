import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [RouterLink,TitleCasePipe],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {



  linkClasses():string{
    return `flex items-center p-2 light-text rounded-lg hover:bg-[#3b3a5c] group`
  }
  svgClasses():string{
    return `shrink-0 w-5 h-5 transition duration-75 group-hover:light-text`
  }
}
