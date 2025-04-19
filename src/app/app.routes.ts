import { Routes } from '@angular/router';
import { AdminLayoutComponent } from '../Layout/admin-layout/admin-layout.component';
import { authGuard } from '../Guardes/auth.guard';
import { LoginComponent } from '../Pages/login/login.component';
import { CreateEmployeeComponent } from '../Pages/create-employee/create-employee.component';
import { EmployeesComponent } from '../Pages/employees/employees.component';

export const routes: Routes = [
    {
      path:'login',
      component:LoginComponent
    },
    {
      path:'',
      canActivate:[authGuard],
      component:AdminLayoutComponent,
      children:[
        {
          path:'employees',
          component:EmployeesComponent
        },
        {
          path:'create-employee',
          component:CreateEmployeeComponent
        }
      ]
    },
    {
      path:'',
      redirectTo:"login",
      pathMatch:"full"
    }



];
// #5b5988
