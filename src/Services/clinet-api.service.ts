import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api } from './../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ClinetApiService {

  constructor(private http:HttpClient) { }

  postMethod(restOfApi:string,body:any):Observable<any>{
    return this.http.post(`${api.url}${restOfApi}`,body)
  }
  getMethod(restOfApi:string):Observable<any>{
    return this.http.get(`${api.url}${restOfApi}`)
  }
  deleteMethod(restOfApi:string):Observable<any>{
    return this.http.delete(`${api.url}${restOfApi}`)
  }
}
