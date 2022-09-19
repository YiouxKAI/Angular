import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService} from './service/app.service'

@Injectable({
  providedIn: 'root'
})
export class SomeService extends AppService {

  constructor(http:HttpClient) {

    super(http,"https://jsonplaceholder.typicode.com/posts");

  }

 
}
