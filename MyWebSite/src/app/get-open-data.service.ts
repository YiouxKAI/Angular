import { HttpClient } from '@angular/common/http';
import { AppService } from './service/app.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetOpenDataService extends AppService {

  constructor(http:HttpClient) { 
    let url:string="https://data.coa.gov.tw/Service/OpenData/ODwsv/ODwsvAttractions.aspx";
    super(http,url);
  }
}
