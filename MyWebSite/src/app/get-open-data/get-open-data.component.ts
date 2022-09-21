import { Component, OnInit } from '@angular/core';
import { GetOpenDataService } from '../get-open-data.service';

@Component({
  selector: 'app-get-open-data',
  templateUrl: './get-open-data.component.html',
  styleUrls: ['./get-open-data.component.css']
})
export class GetOpenDataComponent implements OnInit {
  items:any=[];

  itemID:string="";

  showDetail($event:any){
    console.log($event);
    this.itemID=$event.target.id;
  }

  constructor(private service:GetOpenDataService) { 
    //資料清單
    this.service.listData()
      .subscribe(res => {
        console.log(res);
        this.items=res;
      })
  }

  ngOnInit(): void {
  }

}
