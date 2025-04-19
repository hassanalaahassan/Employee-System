import { HttpErrorResponse, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { ToastService } from '../Services/toast.service';
import { inject } from '@angular/core';
import { tap } from 'rxjs';

export const toasterInterceptor: HttpInterceptorFn = (req, next) => {
  const toastService = inject(ToastService);
  return next(req).pipe(
    tap({
      next: (event) => {

        if (event instanceof HttpResponse) {
                if(!event.url?.includes("/Get")){
                  const message = (event.body as {message?: string,result?:string}).message
                  const result = (event.body as {message?: string,result?:boolean}).result
                  if (result || event.url?.includes("/CreateEmployee")) {
                    toastService.success(message || "Proccess Done Successfully");
                  }
                  else{
                    toastService.error(message);
                  }
                }


        }
      }
    })
  );
};
// ,
//       error: (error) => {
//         if (error instanceof HttpErrorResponse) {
//           console.log(error);

//           // toastService.error();
//         }
//       }
