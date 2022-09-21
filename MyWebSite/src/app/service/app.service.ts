import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';


export class AppService {

  constructor(private http:HttpClient,private url:string) {}

  private handleError=(err:HttpErrorResponse)=>{
    console.log(err);

    let errorMessage:string;
    switch(err.status){
      case 400:
        errorMessage="請求錯誤!";
        break;
      case 404:
        errorMessage="找不到!!";
        break;
      default:
        errorMessage="未知的錯誤!";
        break;
    }

    return of({errorMessage:errorMessage});
    
  }


  getData(id:any){
   return this.http.get(`${this.url}/${id}`)
   .pipe(catchError(this.handleError))

  }

  listData(){
    return this.http.get(`${this.url}`)
    .pipe(catchError(this.handleError))
 
   }

   postData(data:any){
    return  this.http.post(`${this.url}`,data)
    .pipe(catchError(this.handleError))
 
   }

   updateData(id:any,data:any){
    return  this.http.patch(`${this.url}/${id}`,data)
    .pipe(catchError(this.handleError))
 
   }

   DeleteData(id:any){
    return  this.http.delete(`${this.url}/${id}`)
    .pipe(catchError(this.handleError))
 
   }
}
