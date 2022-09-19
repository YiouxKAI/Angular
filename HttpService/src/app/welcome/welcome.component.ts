import { Component, OnInit } from '@angular/core';
import { SomeService } from '../some.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  data: any;

  constructor(private service: SomeService) { }

  ngOnInit(): void {
    // let service=new SomeService();
    // this.data=service.getData();

    //查詢資料
    this.service.getData(30)
      .subscribe(res => {
        console.log(res);

      })

    //資料清單
    this.service.listData()
      .subscribe(res => {
        console.log(res);

      })

    //新增資料
    this.service.postData({ title: "My Title" })
      .subscribe(res => {
        console.log(res);

      })

    //修改資料
    this.service.updateData(23, { title: "aaaaaa" })
      .subscribe(res => {
        console.log(res);

      })

    //刪除資料
    this.service.DeleteData(10)
      .subscribe(res => {
        console.log(res);

      })
  }

}
