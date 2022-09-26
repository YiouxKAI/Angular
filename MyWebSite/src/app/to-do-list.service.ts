import { Injectable } from '@angular/core';
import { AppService } from './service/app.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ToDoListService extends AppService {

  constructor(http:HttpClient) {
    let url:string="http://10.10.51.16/angularapi/api/values";
    super(http,url);
   }
}
