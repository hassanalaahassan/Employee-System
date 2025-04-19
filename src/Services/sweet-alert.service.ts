import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  async showConfirmation(message?: string, title?: string , type?:string ):Promise<boolean> {
    const result = await Swal.fire({
      title: title ? title:"Are you sure ?",
      text: message? message : 'Do You Wanna To Take This Action',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    });
    if (result.isConfirmed) {
      return true;
    } else {
      return false;
    }
  }
}
