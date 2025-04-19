import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, retry, Subscription } from 'rxjs';
import { ILoggedUser, IUser } from '../Interfaces/User';
import { ClinetApiService } from './clinet-api.service';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 currentUser:BehaviorSubject<ILoggedUser> = new BehaviorSubject({} as ILoggedUser)

  constructor(
    private clinet:ClinetApiService,
    private local:LocalstorageService,
  ) { }

  login(user:IUser):Observable<any>{
    return this.clinet.postMethod("login",user)
  }
  setCurrentUser(user:ILoggedUser):void{
    this.currentUser.next(user)
    this.local.setItemIntoLocalStorage("currentUser",user)
  }
  // getCurrentUser():Subscription{
  //   return this.currentUser.subscribe({next:(user:ILoggedUser)=> user})
  // }

}
