import { Component } from '@angular/core';
import { FormFieldComponent } from "../../Shared/shared-Components/form-field/form-field.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { ILoggedUser } from '../../Interfaces/User';
import { Router } from '@angular/router';
import { ToastService } from '../../Services/toast.service';


@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormFieldComponent,ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {

  loginForm:FormGroup = new FormGroup({
    userName: new FormControl('',[Validators.required , Validators.email]),
    password: new FormControl('',[Validators.required , Validators.minLength(6)])
  })

  isSend:boolean = false


  constructor(
    private authService:AuthService,
    private router:Router,
  ){}

  submitLoginForm():void{
    if (this.loginForm.valid && !this.isSend ) {
      this.isSend = true
      this.authService.login(this.loginForm.value).subscribe({
        next:(response:ILoggedUser)=>{
          this.handleLoginSuccess(response)
        },
        complete:()=>{
          this.isSend = false
        }
      })
    }
  }

   handleLoginSuccess(response: ILoggedUser): void {
    if (response.result) {
      this.authService.setCurrentUser(response);
      this.router.navigate(['/']);
    }
  }
}
