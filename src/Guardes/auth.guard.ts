import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LocalstorageService } from '../Services/localstorage.service';
import { ILoggedUser } from '../Interfaces/User';

export const authGuard: CanActivateFn = (route, state) => {
  const local = inject(LocalstorageService)
  const router = inject(Router)
  const userData:ILoggedUser = local.getItemIntoLocalStorage("currentUser");
  if(userData){
    return true
  }

  router.navigate(['/login'])
  return false;
};
